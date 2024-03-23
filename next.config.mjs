/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/seed/**",
        disableStaticImages: true,
      },
    ],
  },
  basePath: "/Nextjs_Carousel_front_consept",
};

export default nextConfig;
