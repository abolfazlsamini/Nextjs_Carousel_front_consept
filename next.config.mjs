/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Nextjs_Carousel_front_consept",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/seed/**",
      },
    ],
  },
};

export default nextConfig;
