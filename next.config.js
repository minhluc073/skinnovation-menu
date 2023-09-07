require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const plugins = [
  [
    withSourceMaps,
    {
      webpack(config, options) {
        return config;
      },
    },
  ],
];

const nextConfig = {
  env: {
    PUBLIC_URL: "",
    NEXT_PUBLIC_API_BASE_URL: "http://localhost:6969/",
  },
  serverRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
      dataset: process.env.SANITY_DATASET,
      projectId: process.env.SANITY_PROJECT_ID,
    },
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_TRACKING_ID,
    formEndpoint: process.env.FORM_ENDPOINT,
    sentry: {
      dsn: process.env.SENTRY_DSN,
      enabled: process.env.SENTRY_ENABLED === "true",
    },
  },
  basePath: "",
};

module.exports = withPlugins(plugins, nextConfig);
