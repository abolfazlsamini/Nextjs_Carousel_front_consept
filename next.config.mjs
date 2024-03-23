/** @type {import('next').NextConfig} */
const nextConfig = {
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
  output: "export",
  basepath: "/Nextjs_Carousel_front_consept",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
