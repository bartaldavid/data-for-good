import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
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
