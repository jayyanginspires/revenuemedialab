import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The marketing essay and workbook now live on jayyanginspires.com,
      // which is a better fit for that front end. Temporary (not 308) because
      // DQs will eventually be pointed at the YouTube video instead, and a
      // permanent redirect would be cached by browsers and search engines.
      {
        source: "/marketing",
        destination: "https://jayyanginspires.com/marketing",
        permanent: false,
      },
      {
        source: "/marketing/:path*",
        destination: "https://jayyanginspires.com/marketing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
