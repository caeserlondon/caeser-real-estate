import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: false,
	},

	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [
			16, 32, 48, 64, 96, 128, 256, 292, 320, 360, 389, 420, 438, 512,
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				port: '',
				pathname: '/**',
			},
		],
	},

	output: 'standalone',
	transpilePackages: ['motion'],

	webpack: (config, { dev }) => {
		if (dev && process.env.DISABLE_HMR === 'true') {
			config.watchOptions = {
				ignored: /.*/,
			}
		}

		return config
	},
}

export default nextConfig
