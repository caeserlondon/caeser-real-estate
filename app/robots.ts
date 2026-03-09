import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://caeser-real-estate.vercel.app'

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/'],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
