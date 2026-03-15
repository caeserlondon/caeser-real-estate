'use client'

import { testimonials } from '@/lib/homepage-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ITEMS_PER_PAGE = 2
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE)

export function TestimonialsSection() {
	const [page, setPage] = useState(0)

	const currentTestimonials = testimonials.slice(
		page * ITEMS_PER_PAGE,
		page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
	)

	const goBack = () => setPage((p) => Math.max(0, p - 1))
	const goForward = () => setPage((p) => Math.min(totalPages - 1, p + 1))

	return (
		<section
			id='testimonials'
			className='py-24 bg-neutral-900 border-y border-white/5'
		>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<p className='text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3'>
						Client Stories
					</p>
					<h2 className='font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight'>
						WHAT MY CLIENTS SAY
					</h2>
					<p className='text-neutral-300 text-base italic font-light mt-4'>
						Trusted voices across the city
					</p>
					<div className='h-[1px] w-24 bg-gold mt-8 mx-auto' />
				</div>

				{/* Testimonial Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
					{currentTestimonials.map((testimonial, idx) => (
						<div
							key={`${page}-${idx}`}
							className='border-l-2 border-gold bg-neutral-950/60 p-8 md:p-10'
						>
							<p className='text-neutral-300 font-light italic text-base md:text-lg leading-relaxed mb-8'>
								&ldquo;{testimonial.quote}&rdquo;
							</p>
							<div className='flex items-center gap-4'>
								<div className='w-10 h-10 rounded-full overflow-hidden relative shrink-0 border border-white/10'>
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className='object-cover'
									/>
								</div>
								<div>
									<p className='text-white text-xs font-bold tracking-[0.15em] uppercase'>
										{testimonial.name}
									</p>
									<p className='text-[11px] text-neutral-300 mt-0.5'>
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className='flex items-center justify-center gap-6 mt-12'>
						<button
							onClick={goBack}
							disabled={page === 0}
							aria-label='Previous testimonials'
							className='w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
						>
							<ChevronLeft className='w-4 h-4' />
						</button>
						<span className='text-neutral-300 text-xs tracking-widest tabular-nums'>
							{page + 1} / {totalPages}
						</span>
						<button
							onClick={goForward}
							disabled={page === totalPages - 1}
							aria-label='Next testimonials'
							className='w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:border-gold hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
						>
							<ChevronRight className='w-4 h-4' />
						</button>
					</div>
				)}
			</div>
		</section>
	)
}
