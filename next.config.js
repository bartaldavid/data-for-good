const withNextIntl =
  require("next-intl/plugin")();
  // This is the default (also the `src` folder is supported out of the box)

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/oego37nzuu1n/**",
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "next-intl/config": "./i18n.ts",
      },
    },
  },
});
