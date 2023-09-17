/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      pure: true,
      cssProp: true,
    },
  },
};

module.exports = nextConfig;
