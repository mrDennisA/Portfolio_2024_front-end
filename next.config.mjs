import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   hostname: "localhost",
      //   port: "3000",
      // },
      {
        protocol: "https",
        hostname: "www.dalekseev.dev",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
