
export const web = new sst.aws.Nextjs("FrontEnd", {
  path: "packages/frontend",
  domain: {
    name: $app.stage === "staging" ? "staging.sst-issue-repro.360works.com" : "sst-issue-repro.360works.com",
  },
  environment: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
    COGNITO_CLIENT_SECRET: process.env.COGNITO_CLIENT_SECRET,
    COGNITO_ISSUER: process.env.COGNITO_ISSUER,
  }
});
