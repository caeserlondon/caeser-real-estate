import type { PropertyListing } from '@/data/properties'
import { Bath, Bed, Maximize } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type PropertyCardProps = Readonly<{
	property: PropertyListing
}>

export function PropertyCard({ property }: PropertyCardProps) {
	return (
		<Link
			href={`/properties/${property.slug}`}
			className='group cursor-pointer block'
		>
			<div className='aspect-[4/3] overflow-hidden mb-4 relative bg-neutral-900'>
				<Image
					src={property.coverImage}
					alt={property.title}
					fill
					sizes='(min-width: 1280px) 389px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 768px) calc((100vw - 80px) / 2), calc(100vw - 48px)'
					quality={60}
					className='object-cover transition-transform duration-700 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors' />

				{property.status === 'under-offer' && (
					<div className='absolute top-4 left-4 bg-gold text-neutral-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1'>
						Under Offer
					</div>
				)}
			</div>

			<div className='space-y-2'>
				<p className='text-gold text-[10px] font-bold tracking-[0.2em] uppercase'>
					{property.area}
				</p>

				<h3 className='font-serif text-lg text-white group-hover:text-gold-500 transition-colors leading-snug'>
					{property.title}
				</h3>

				<p className='font-serif text-xl text-white group-hover:text-gold-500 transition-colors'>
					{property.priceLabel}
				</p>

				<div className='flex items-center gap-5 pt-1 text-neutral-400 group-hover:text-gold-500 text-xs tracking-wider transition-colors'>
					<span className='inline-flex items-center gap-1.5 text-neutral-300'>
						<Bed className='w-3.5 h-3.5' />
						{property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}
					</span>

					<span className='inline-flex items-center gap-1.5 text-neutral-300'>
						<Bath className='w-3.5 h-3.5' />
						{property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}
					</span>

					<span className='inline-flex items-center gap-1.5 text-neutral-300'>
						<Maximize className='w-3.5 h-3.5' />
						{property.sizeSqFt.toLocaleString()} sq ft
					</span>
				</div>
			</div>
		</Link>
	)
}
