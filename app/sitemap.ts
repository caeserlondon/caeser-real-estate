import { properties } from '@/data/properties'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://caeser-real-estate.vercel.app'

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${baseUrl}/`,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	]

	const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
		url: `${baseUrl}/properties/${property.slug}`,
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}))

	return [...staticRoutes, ...propertyRoutes]
}
