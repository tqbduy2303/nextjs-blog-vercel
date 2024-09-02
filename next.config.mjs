import createNextIntlPlugin from 'next-intl/plugin';
import removeImports from 'next-remove-imports';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "platform-lookaside.fbsbx.com", //facebook
            "firebasestorage.googleapis.com", //firebase-storage
            "scontent-atl3-2.xx.fbcdn.net", //facebook
            "pbs.twimg.com", //twitter
          ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.example.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
};
export const removeImportsConfig = removeImports({});

export default withNextIntl(nextConfig);
