// @ts-check

const { env } = await import("./src/env.js");

/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  // needed to make the FPL API rewrite work
  skipTrailingSlashRedirect: true,

  /**
   * Proxy requests to the FPL API.
   */
  async rewrites() {
    return [
      {
        source: "/fpl-api/:path*",
        destination: `${env.NEXT_PUBLIC_FPL_API_BASE_URL}/:path*/`,
      },
    ];
  },
};

export default nextConfig;
