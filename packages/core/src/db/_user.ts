import {Resource} from "sst";
import {drizzle} from "drizzle-orm/aws-data-api/pg";
import {RDSDataClient} from "@aws-sdk/client-rds-data";
import {userSchema, InsertUser, SelectUser} from "@jll-permitting-app/core/schema/user.sql";
import {eq} from "drizzle-orm";
import {getLogger} from "@jll-permitting-app/core/logging/logProvider";
import {CognitoProfile} from "@jll-permitting-app/core/auth/auth.types";
import {UserFormValues} from "@jll-permitting-app/core/db/_user.types";


const log = getLogger("_user.ts");

const client = new RDSDataClient({});
const db = drizzle(client, {
  database: `${Resource.App.stage}-jll-permitting-app`,
  secretArn: Resource.JLLPermittingDB.secretArn,
  resourceArn: Resource.JLLPermittingDB.clusterArn,
});


export const getUser = async (userID: string): Promise<SelectUser> => {
  log.debug("getUser with ID: ", userID);

  let result = await db
    .select()
    .from(userSchema)
    .where(eq(userSchema.id, userID))
    .execute();
  log.debug("getUser result", result)

  return result[0];
}

// This is used by next-auth to set and update the databaseUser in the session
export const getUserByCognitoEmail = async (cognitoEmail: string) => {
  log.debug("getUserByCognitoEmail with cognitoEmail: ", cognitoEmail);

  let result = await db
    .select()
    .from(userSchema)
    .where(eq(userSchema.cognitoEmail, cognitoEmail))
    .execute();
  log.debug("getUserByCognitoEmailresult", result)
  return result;
}

export const updateUser = async (userID: string, user: InsertUser) => {
  if (userID !== user.id) {
    log.error("updateUser", "Target user didnt match match logged in user: " + userID + " Target application userID: " + user.id);
    throw new Error("You do not have access to this user");
  }

  try {
    await db
      .update(userSchema)
      .set(user)
      .where(eq(userSchema.id, userID))
      .execute();
  } catch (e: unknown) {
    if (e instanceof Error) {
      log.error("updateUser error message:", e.message);
      throw new Error("We couldn't update this user.  Please try again.");
    } else {
      log.error("createUser unknown error:", e);
      throw ((e as Error).message);
    }
  }
}

export const deleteUser = async (signedInUser: CognitoProfile, userID: string) => {
  return await db
    .delete(userSchema)
    .where(eq(userSchema.id, userID))
    .execute();
}

export const createUser = async (cognitoEmail: string, user: UserFormValues) => {
  log.debug("createUser with cognitoEmail:", user.cognitoEmail);

  user.cognitoEmail = cognitoEmail;

  try {
    const insertUser = {...user, id: crypto.randomUUID()};
    return await db
      .insert(userSchema)
      .values(insertUser)
      .returning()
      .execute();
  } catch (e: unknown) {
    if (e instanceof Error) {
      log.error("createUser error message:", e.message);
      throw new Error("We couldn't create a new user.  Please try again.")
    } else {
      log.error("createUser unknown error:", e);
      throw ((e as Error).message);
    }
  }
}