import { SectionHeader } from '@/components/ui/SectionHeader'
import Image from 'next/image'

export function AboutSection() {
	return (
		<section id='about' className='py-24 bg-neutral-900'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					<div className='relative aspect-[4/5] lg:aspect-square w-full max-w-md mx-auto lg:max-w-none group'>
						<div className='absolute inset-0 border border-gold/30 translate-x-4 translate-y-4' />
						<Image
							src='/caeser-color.png'
							alt='Agent Portrait'
							fill
							sizes='(min-width: 1280px) 584px, (min-width: 1024px) calc((100vw - 112px) / 2), 448px'
							quality={70}
							className='object-cover grayscale transition-all duration-700 group-hover:grayscale-0'
						/>
					</div>

					<div>
						<SectionHeader
							align='left'
							subtitle='About The Agent'
							title='A TRUSTED ADVISOR IN LUXURY REAL ESTATE'
						/>
						<p className='text-neutral-400 leading-relaxed mb-8 text-lg font-light'>
							Leading for discerning buyers and sellers in Prime Central London
							who expect more than just transactions. With a deep understanding
							of the market nuances and a commitment to discretion, I provide a
							bespoke service tailored to your unique lifestyle aspirations.
						</p>

						<div className='grid grid-cols-3 gap-8 border-t border-white/10 pt-8'>
							<div>
								<div className='text-3xl md:text-4xl font-serif text-gold mb-2'>
									15+
								</div>
								<div className='text-xs md:text-sm tracking-[0.12em] uppercase text-neutral-300'>
									Years of Experience
								</div>
							</div>
							<div>
								<div className='text-3xl md:text-4xl font-serif text-gold mb-2'>
									250+
								</div>
								<div className='text-xs md:text-sm tracking-[0.12em] uppercase text-neutral-300'>
									Properties Sold
								</div>
							</div>
							<div>
								<div className='text-3xl md:text-4xl font-serif text-gold mb-2'>
									40+
								</div>
								<div className='text-xs md:text-sm tracking-[0.12em] uppercase text-neutral-300'>
									Transactions per Year
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
