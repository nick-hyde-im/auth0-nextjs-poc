/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/articles',
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/auth/api/:path*',
  //       destination: '/api/:path*',
  //     },
  //   ];
  // },
  // headers: async () => {
  //   return [
  //     {
  //       source: '/auth/api/:path*',
  //       headers: [
  //         {
  //           key: 'wibble',
  //           value: 'wobble',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
