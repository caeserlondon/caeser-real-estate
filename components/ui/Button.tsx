interface ButtonProps {
	children: React.ReactNode
	variant?: 'primary' | 'outline' | 'text'
	className?: string
	href?: string
	onClick?: () => void
}

export function Button({
	children,
	variant = 'primary',
	className = '',
	href,
	onClick,
}: ButtonProps) {
	const baseStyle =
		'inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300'
	const variants = {
		primary: 'bg-gold text-neutral-950 hover:bg-white',
		outline:
			'border border-white/20 text-white hover:border-gold hover:text-gold',
		text: 'text-white hover:text-gold px-0 py-2',
	}

	const buttonClass = `${baseStyle} ${variants[variant]} ${className}`

	if (href) {
		return (
			<a href={href} className={buttonClass}>
				{children}
			</a>
		)
	}

	return (
		<button className={buttonClass} onClick={onClick}>
			{children}
		</button>
	)
}
