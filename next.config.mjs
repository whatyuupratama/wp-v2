/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatar.vercel.sh',
      'media.licdn.com',
      'p16-sign-va.tiktokcdn.com',
      'avatars.githubusercontent.com',
      'instagram.fsub8-2.fna.fbcdn.net',
    ],
  },
};

export default nextConfig;
