/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    future: {
        webpack5: false
    },
    images: {
        domains: ["backend.gublootechnologies.com"]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;