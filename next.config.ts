import type { NextConfig } from "next";
import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
