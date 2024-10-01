import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

const client = new RDSDataClient({});

export const db = drizzle(client, {
    database: Resource.JLLPermittingDB.database,
    secretArn: Resource.JLLPermittingDB.secretArn,
    resourceArn: Resource.JLLPermittingDB.clusterArn,
});