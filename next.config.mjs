import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/img/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.dalekseev.dev",
      //   port: "",
      //   pathname: "/img/**",
      // },
    ],
  },
};

export default withPlaiceholder(nextConfig);
