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

// // next.config.js
//
// const isGithubActions = process.env.GITHUB_ACTIONS || false
//
// let assetPrefix = ''
// let basePath = '/'
//
// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }
//
// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     loader: 'imgix',
//     path: 'the "domain" of your Imigix source',
//   },
// }