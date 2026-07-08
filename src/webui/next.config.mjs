const backend = process.env.BACKEND_URL || "http://backend:8000";

/** @type {import('next').NextConfig} */
export default {
  output: "standalone",
  async rewrites() {
    return [
      // Proxy /api/* to the FastAPI backend (avoids CORS).
      { source: "/api/:path*", destination: `${backend}/:path*` },
    ];
  },
  async redirects() {
    // Each agora now has its own route (/0g, /erc-8226). The old combined chat at /app
    // (and the earlier /chat) redirect to the default agora so existing links keep working.
    return [
      { source: "/app", destination: "/0g", permanent: false },
      { source: "/chat", destination: "/0g", permanent: false },
    ];
  },
};
