'use client'

import { Button } from '@/components/ui/Button'
import { motion } from 'motion/react'
import Image from 'next/image'

export function HeroSection() {
	return (
		<section className='relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/hero.png'
					alt='Luxury Penthouse View'
					fill
					className='object-cover opacity-60'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950' />
			</div>

			{/* Content */}
			<div className='relative z-10 max-w-5xl mx-auto px-6 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<p className='text-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6'>
						Prime Central London
					</p>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8 tracking-tight'
				>
					UNLOCK THE ART <br />
					<span className='italic font-light'>OF LUXURY LIVING</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className='flex flex-col md:flex-row items-center justify-center gap-4 mt-12'
				>
					<Button href='#properties'>View Properties</Button>
					<Button variant='outline' href='#contact'>
						Contact Agent
					</Button>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50'
			>
				<span className='text-[10px] tracking-widest uppercase'>Scroll</span>
				<div className='w-[1px] h-12 bg-white/20'>
					<div className='w-full h-1/2 bg-gold animate-bounce' />
				</div>
			</motion.div>
		</section>
	)
}
