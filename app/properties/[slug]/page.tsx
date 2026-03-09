import {
	ArrowLeft,
	Bath,
	Bed,
	Check,
	DoorOpen,
	MapPin,
	Maximize,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { PropertyGallery } from '@/components/ui/PropertyGallery'
import { properties } from '@/data/properties'

function getProperty(slug: string) {
	return properties.find((p) => p.slug === slug) ?? null
}

export async function generateStaticParams() {
	return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const property = getProperty(slug)
	if (!property) return { title: 'Property Not Found' }
	return {
		title: `${property.title} | Caeser Real Estate`,
		description: property.shortDescription,
	}
}

export default async function PropertyDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const property = getProperty(slug)
	if (!property) notFound()

	const detailItems = [
		{ label: 'Tenure', value: property.tenure },
		{
			label: 'Lease Remaining',
			value: `${property.leaseYearsRemaining} years`,
		},
		{
			label: 'Service Charge',
			value: `£${property.serviceChargeAnnual.toLocaleString()} p.a.`,
		},
		{
			label: 'Ground Rent',
			value: `£${property.groundRentAnnual.toLocaleString()} p.a.`,
		},
		{ label: 'Council Tax', value: `Band ${property.councilTaxBand}` },
		{ label: 'EPC Rating', value: property.epcRating },
	]

	return (
		<main className='min-h-screen bg-neutral-950'>
			<Header />

			{/* Hero Cover */}
			<section className='relative h-[50vh] min-h-[400px] mt-20'>
				<Image
					src={property.coverImage}
					alt={property.title}
					fill
					priority
					className='object-cover'
					sizes='100vw'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent' />
			</section>

			{/* Property Header */}
			<section className='max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-12 border-b border-white/10'>
				<Link
					href='/#properties'
					className='inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white mb-8 transition-colors duration-200 hover:text-yellow-400'
				>
					<ArrowLeft className='w-4 h-4' />
					<span>Back to Properties</span>
				</Link>

				<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3'>
					{property.area} · {property.postcode}
				</p>
				<h1 className='font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4'>
					{property.title}
				</h1>
				<p className='font-serif text-2xl md:text-3xl text-white mb-6'>
					{property.priceLabel}
				</p>
				<p className='text-neutral-400 text-lg font-light max-w-3xl leading-relaxed'>
					{property.shortDescription}
				</p>

				{/* Quick Stats Row */}
				<div className='flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/10'>
					<div className='flex items-center gap-2 text-neutral-300 text-sm'>
						<Bed className='w-4 h-4 text-gold' />
						<span>
							{property.bedrooms} Bedroom{property.bedrooms !== 1 ? 's' : ''}
						</span>
					</div>
					<div className='flex items-center gap-2 text-neutral-300 text-sm'>
						<Bath className='w-4 h-4 text-gold' />
						<span>
							{property.bathrooms} Bathroom{property.bathrooms !== 1 ? 's' : ''}
						</span>
					</div>
					<div className='flex items-center gap-2 text-neutral-300 text-sm'>
						<DoorOpen className='w-4 h-4 text-gold' />
						<span>
							{property.receptions} Reception
							{property.receptions !== 1 ? 's' : ''}
						</span>
					</div>
					<div className='flex items-center gap-2 text-neutral-300 text-sm'>
						<Maximize className='w-4 h-4 text-gold' />
						<span>
							{property.sizeSqFt.toLocaleString()} sq ft ({property.sizeSqM} sq
							m)
						</span>
					</div>
				</div>
			</section>

			{/* Image Gallery */}
			<section className='max-w-7xl mx-auto px-6 py-16'>
				<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6'>
					Gallery
				</p>
				<PropertyGallery images={property.images} title={property.title} />
			</section>

			{/* Description & Details */}
			<section className='max-w-7xl mx-auto px-6 pb-16'>
				<div className='grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16'>
					{/* Left: Description */}
					<div>
						<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4'>
							About This Property
						</p>
						<div className='h-[1px] w-24 bg-gold mb-8' />
						<p className='text-neutral-300 text-base leading-[1.85] font-light'>
							{property.description}
						</p>

						{/* Key Features */}
						<div className='mt-12'>
							<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4'>
								Key Features
							</p>
							<div className='h-[1px] w-24 bg-gold mb-8' />
							<ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{property.keyFeatures.map((feature) => (
									<li
										key={feature}
										className='flex items-start gap-3 text-neutral-300 text-sm leading-relaxed'
									>
										<Check className='w-4 h-4 text-gold mt-0.5 shrink-0' />
										{feature}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right: Listing Details */}
					<div>
						<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4'>
							Listing Details
						</p>
						<div className='h-[1px] w-24 bg-gold mb-8' />

						<div className='border border-white/5 bg-neutral-900/50'>
							{detailItems.map((item) => (
								<div
									key={item.label}
									className='flex items-center justify-between py-4 px-6 border-b border-white/5 last:border-b-0'
								>
									<span className='text-neutral-500 text-xs font-bold uppercase tracking-widest'>
										{item.label}
									</span>
									<span className='text-white text-sm'>{item.value}</span>
								</div>
							))}
						</div>

						{/* Address */}
						<div className='mt-8'>
							<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4'>
								Address
							</p>
							<div className='h-[1px] w-24 bg-gold mb-6' />
							<div className='flex items-start gap-3 text-neutral-300 text-sm'>
								<MapPin className='w-4 h-4 text-gold mt-0.5 shrink-0' />
								<span>
									{property.addressLine}, {property.postcode}
								</span>
							</div>
						</div>

						{/* Location Highlights */}
						<div className='mt-8'>
							<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4'>
								Location Highlights
							</p>
							<div className='h-[1px] w-24 bg-gold mb-6' />
							<ul className='space-y-3'>
								{property.locationHighlights.map((highlight) => (
									<li
										key={highlight}
										className='flex items-start gap-3 text-neutral-300 text-sm leading-relaxed'
									>
										<Check className='w-4 h-4 text-gold mt-0.5 shrink-0' />
										{highlight}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}
