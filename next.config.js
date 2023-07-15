/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DB_URI: process.env.DB_URI,
        ADMIN_PASS: process.env.ADMIN_PASS,
        ADMIN_NAME: process.env.ADMIN_NAME
    }
}

module.exports = nextConfig
