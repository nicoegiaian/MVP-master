/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // If you need SPA-style catch-all, use Next.js param syntax (NOT /(.*))
  async rewrites() {
    // Return an empty array by default.
    // If you need a catch‑all to '/', uncomment the line below:
    // return [{ source: '/:path*', destination: '/' }];
    return [];
  },

  async redirects() {
    // Keep empty unless you explicitly need redirects, and always use colon params.
    return [
      // Example:
      // { source: '/old/:slug*', destination: '/new/:slug*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
