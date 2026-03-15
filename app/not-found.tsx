import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { RollLink } from '@/components/ui/RollLink'
import Image from 'next/image'

export default function NotFound() {
	return (
		<main className='min-h-screen bg-neutral-950 flex flex-col'>
			<Header />

			<div className='flex-1 relative flex items-center justify-center'>
				<Image src='/hero.avif' alt='' fill className='object-cover' priority />
				<div className='absolute inset-0 bg-black/70' />

				<div className='relative z-10 text-center px-6'>
					<p className='text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4'>
						Page Not Found
					</p>
					<h1 className='font-serif text-6xl md:text-8xl text-white mb-4'>
						404
					</h1>
					<p className='text-neutral-400 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed'>
						The page you are looking for doesn&apos;t exist or has been moved.
					</p>
					<RollLink
						href='/'
						className='inline-block border border-gold bg-gold text-neutral-950 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-colors hover:bg-transparent hover:text-gold'
					>
						Back to Home Page
					</RollLink>
				</div>
			</div>

			<Footer />
		</main>
	)
}
