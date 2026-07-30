import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const isPagesBuild = process.env.PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isPagesBuild ? { output: "export", trailingSlash: true } : {}),
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
};

export default nextConfig;
