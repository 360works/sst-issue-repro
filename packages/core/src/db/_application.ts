import {Resource} from "sst";
import {drizzle} from "drizzle-orm/aws-data-api/pg";
import {RDSDataClient} from "@aws-sdk/client-rds-data";
import {applicationSchema, InsertApplication, SelectApplication} from "@jll-permitting-app/core/schema/application.sql";
import {and, eq} from "drizzle-orm";
import {
  mutateDBValuesToBeCompatibleWithForm,
  mutateFormValuesToBeCompatibleWithDB
} from "@jll-permitting-app/core/db/utils";
import {
  ApplicationForm
} from "@jll-permitting-app/core/db/_application.types";
import {JobTypeEnum} from "@jll-permitting-app/core/db/_application.types";
import {getLogger} from "@jll-permitting-app/core/logging/logProvider";

const log = getLogger("_application.ts");

const client = new RDSDataClient({});
const db = drizzle(client, {
  database: `${Resource.App.stage}-jll-permitting-app`,
  secretArn: Resource.JLLPermittingDB.secretArn,
  resourceArn: Resource.JLLPermittingDB.clusterArn,
});

export const createApplication = async (userID: string, application: InsertApplication) => {
  log.debug("createApplication application: ", application)

  application.userID = userID;
  return await db
    .insert(applicationSchema)
    .values(application)
    .returning()
    .execute();
}

export const getApplicationByID = async (userID: string, applicationID: string): Promise<SelectApplication> => {
  log.debug("getApplicationByID applicationID: ", applicationID)
  let result = await db
    .select()
    .from(applicationSchema)
    .where(eq(applicationSchema.id, applicationID))
    .execute();

  if (result.length === 0) {
    log.error("getApplicationByID", "We could not find the target application: " + applicationID);
    throw new Error("We could not find the target application");
  }

  if (result[0].userID !== userID) {
    log.error("getApplicationByID", "Target application didnt match match logged in user: " + userID + " Target application userID: " + applicationID);
    throw new Error("You do not have access to this application");
  }

  const application = result[0];
  mutateDBValuesToBeCompatibleWithForm(application as unknown as ApplicationForm);

  return application;
}

export const getApplicationsByUserID = async (userID: string): Promise<SelectApplication[]> => {
  log.debug("get applications signed in UserID", userID)
  let result = await db
    .select()
    .from(applicationSchema)
    .where(eq(applicationSchema.userID, userID))
    .execute();

  return result;
}

export const getApplicationsByUserIDAndJobType = async (userID: string, jobType: JobTypeEnum): Promise<SelectApplication[]> => {
  log.debug("get applications signed in UserID", userID + " And JobType: " + jobType);
  let result = await db
    .select()
    .from(applicationSchema)
    .where(
      and(
        eq(applicationSchema.userID, userID),
        eq(applicationSchema.jobType, jobType)
      )
    )
    .execute();
  console.log("getApplicationsByUserIDAndJobType", result)
  return result;
}

export const updateApplication = async (userID: string, applicationForm: ApplicationForm) => {
  log.info("updateApplication application:", applicationForm);

  await getApplicationByID(userID, applicationForm.id || "");

  const insertApplication = mutateFormValuesToBeCompatibleWithDB(applicationForm);
  log.info("New insert application:", insertApplication);

  try {
    return await db
      .update(applicationSchema)
      .set(insertApplication as InsertApplication)
      .where(eq(applicationSchema.id, applicationForm.id || ""))
      .execute();
  } catch (e) {
    if (e instanceof Error) {
      log.error("updateApplication error: ", e.message);
      throw new Error("We couldn't update your application at this time");
    }
  }

}

export const deleteApplication = async (userID: string, applicationID: string) => {
  return await db
    .delete(applicationSchema)
    .where(eq(applicationSchema.id, applicationID))
    .execute();
}

