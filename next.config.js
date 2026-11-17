/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow Next.js dev server to serve assets to custom local virtual hosts.
  // Without this, requests from *.local:3002 get 403 because Next.js blocks unknown origins.
  allowedDevOrigins: [
    'site-main.local',
    'emailing.local',
    'landing-page.local',
    'developpement-web.local',
  ],
}

module.exports = nextConfig
