// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/nextjs_githubpages',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
