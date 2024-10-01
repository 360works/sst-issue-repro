import {defineConfig} from "drizzle-kit";
import {Resource} from "sst";

console.log("database", `${Resource.App.stage}-jll-permitting-app`)
console.log("secretArn", Resource.JLLPermittingDB.secretArn)
console.log("clusterArn", Resource.JLLPermittingDB.clusterArn)

export default defineConfig({
    driver: "aws-data-api",
    dialect: "postgresql",
    dbCredentials: {
        database: `${Resource.App.stage}-jll-permitting-app`,
        secretArn: Resource.JLLPermittingDB.secretArn,
        resourceArn: Resource.JLLPermittingDB.clusterArn,
    },
    // Pick up all our schema files
    schema: ["./**/*.sql.ts"],
    out: "./migrations",
});
