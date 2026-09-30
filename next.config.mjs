/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
        additionalData: `$var: red;`,
      },
};

export default nextConfig;
