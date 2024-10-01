import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        locale: false
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias["handlebars"] = path.resolve("../../node_modules/handlebars/dist/handlebars.js")
    return config
  }
}

export default nextConfig
