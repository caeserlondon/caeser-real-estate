import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-serif',
	display: 'swap',
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Caeser Real Estate | Prime Central London',
	description:
		'Unlock the art of luxury living with Caeser Real Estate, your trusted advisor in Prime Central London.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${playfair.variable} ${inter.variable} scroll-smooth`}
			suppressHydrationWarning
		>
			<body
				className='bg-neutral-950 text-neutral-200 antialiased selection:bg-amber-900 selection:text-white'
				suppressHydrationWarning
			>
				{children}
			</body>
		</html>
	)
}
