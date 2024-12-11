/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode:true,
    images: {
        domains: ['images.metmuseum.org'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn-icons-png.flaticon.com'
            },
            // {
            //   protocol: 'https',
            //   hostname: 'hydeparkwinterwonderland.com'
            // },
           
          ]
    }
};

export default nextConfig;
