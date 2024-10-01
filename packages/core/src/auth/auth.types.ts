// Third-party Imports
import {SelectUser} from "@jll-permitting-app/core/schema/user.sql";
import {getUserByCognitoEmail} from "@jll-permitting-app/core/db/_user";

// Define a custom profile interface that extends the default NextAuth profile
export interface CognitoProfile extends Record<string, any> {
  sub: string;
  email?: string;
  name?: string;
  "cognito:groups"?: string[];
  databaseUser?: SelectUser;
}