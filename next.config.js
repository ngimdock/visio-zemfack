/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },

  env: {
    APP_NAME: "visio",
    DEVELOPPER_NAME: "zemfack",
  },
};

module.exports = nextConfig;
