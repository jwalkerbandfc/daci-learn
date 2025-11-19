import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: '/',
      destination: 'https://canvas.instructure.com/courses/13420265',
      permanent: true, // Use true for 308 (Permanent), false for 307 (Temporary)
    },
    ];
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
