import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Duc-Hong-Y-Nguyen-Van-Thuan';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages
  // If you are deploying to a custom domain (e.g. example.com), remove this line
  // If you are deploying to username.github.io/repo-name, keep this line
  basePath: isProd ? `/${repoName}` : '',
};

export default nextConfig;
