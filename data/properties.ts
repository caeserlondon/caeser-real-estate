export type PropertyListing = {
	id: string
	slug: string
	title: string
	listingType: 'sale'
	status: 'available' | 'under-offer' | 'sold'
	price: number
	priceLabel: string
	currency: 'GBP'
	addressLine: string
	area: 'Mayfair' | 'Knightsbridge'
	postcode: string
	bedrooms: number
	bathrooms: number
	receptions: number
	sizeSqFt: number
	sizeSqM: number
	tenure: string
	leaseYearsRemaining: number
	serviceChargeAnnual: number
	groundRentAnnual: number
	councilTaxBand: string
	epcRating: string
	shortDescription: string
	description: string
	keyFeatures: string[]
	locationHighlights: string[]
	coverImage: string
	images: string[]
	featured: boolean
}

export const properties: PropertyListing[] = [
	{
		id: 'prop-001',
		slug: 'mount-street-one-bedroom',
		title: 'Elegant One-Bedroom Apartment, Mount Street',
		listingType: 'sale',
		status: 'available',
		price: 1950000,
		priceLabel: '£1,950,000',
		currency: 'GBP',
		addressLine: 'Mount Street, Mayfair',
		area: 'Mayfair',
		postcode: 'W1K',
		bedrooms: 1,
		bathrooms: 1,
		receptions: 1,
		sizeSqFt: 689,
		sizeSqM: 64,
		tenure: 'Leasehold',
		leaseYearsRemaining: 118,
		serviceChargeAnnual: 9500,
		groundRentAnnual: 500,
		councilTaxBand: 'H',
		epcRating: 'C',
		shortDescription:
			"A refined one-bedroom apartment in the heart of Mayfair, moments from Grosvenor Square and Mount Street's boutiques and restaurants.",
		description:
			"Set within a well-maintained portered building, this beautifully presented apartment offers a bright reception room, bespoke kitchen, generous double bedroom and a sleek marble bathroom. The interiors are calm and contemporary, with excellent built-in storage and an easy, elegant flow throughout. Ideal as a London pied-à-terre, investment or primary residence in one of the capital's most prestigious postcodes.",
		keyFeatures: [
			'Portered building',
			'Lift access',
			'Bespoke fitted kitchen',
			'Marble bathroom',
			'Built-in wardrobes',
			'Excellent natural light',
		],
		locationHighlights: [
			'Moments from Mount Street',
			'Close to Grosvenor Square',
			'Easy access to Hyde Park',
			'Surrounded by luxury dining and retail',
		],
		coverImage: '/properties/mount-street-one-bedroom/cover.jpeg',
		images: [
			'/properties/mount-street-one-bedroom/cover.jpeg',
			'/properties/mount-street-one-bedroom/living-room-1.jpeg',
			'/properties/mount-street-one-bedroom/kitchen-1.jpeg',
			'/properties/mount-street-one-bedroom/bathroom-1.jpeg',
		],
		featured: true,
	},
	{
		id: 'prop-002',
		slug: 'curzon-street-two-bedroom',
		title: 'Stylish Two-Bedroom Apartment, Curzon Street',
		listingType: 'sale',
		status: 'available',
		price: 3250000,
		priceLabel: '£3,250,000',
		currency: 'GBP',
		addressLine: 'Curzon Street, Mayfair',
		area: 'Mayfair',
		postcode: 'W1J',
		bedrooms: 2,
		bathrooms: 2,
		receptions: 1,
		sizeSqFt: 1048,
		sizeSqM: 97,
		tenure: 'Leasehold',
		leaseYearsRemaining: 121,
		serviceChargeAnnual: 12400,
		groundRentAnnual: 650,
		councilTaxBand: 'H',
		epcRating: 'C',
		shortDescription:
			'A beautifully upgraded two-bedroom apartment with classic proportions and modern finishes in prime Mayfair.',
		description:
			'This impressive Curzon Street apartment combines timeless Mayfair character with a fresh contemporary finish. The layout includes a spacious reception and dining area, a separate designer kitchen, principal bedroom suite, second double bedroom and a guest shower room. High ceilings, refined detailing and excellent entertaining space make this a standout central London home.',
		keyFeatures: [
			'Two double bedrooms',
			'Principal en-suite',
			'Separate fitted kitchen',
			'Period proportions',
			'Lift access',
			'Turnkey condition',
		],
		locationHighlights: [
			'Near Green Park',
			'Close to Berkeley Square',
			'Short distance to Hyde Park',
			'Prime central Mayfair address',
		],
		coverImage: '/properties/curzon-street-two-bedroom/cover.png',
		images: [
			'/properties/curzon-street-two-bedroom/cover.png',
			'/properties/curzon-street-two-bedroom/living-room-1.jpeg',
			'/properties/curzon-street-two-bedroom/living-area-1.jpeg',
			'/properties/curzon-street-two-bedroom/bathroom-1.jpeg',
			'/properties/curzon-street-two-bedroom/kitchen-1.jpeg',
		],
		featured: true,
	},
	{
		id: 'prop-003',
		slug: 'green-street-three-bedroom',
		title: 'Three-Bedroom Duplex Apartment, Green Street',
		listingType: 'sale',
		status: 'available',
		price: 5950000,
		priceLabel: '£5,950,000',
		currency: 'GBP',
		addressLine: 'Green Street, Mayfair',
		area: 'Mayfair',
		postcode: 'W1K',
		bedrooms: 3,
		bathrooms: 3,
		receptions: 1,
		sizeSqFt: 1825,
		sizeSqM: 170,
		tenure: 'Leasehold',
		leaseYearsRemaining: 129,
		serviceChargeAnnual: 18600,
		groundRentAnnual: 900,
		councilTaxBand: 'H',
		epcRating: 'B',
		shortDescription:
			'A substantial three-bedroom duplex apartment offering lateral living, luxury finishes and a superb Mayfair position near Hyde Park.',
		description:
			'Arranged across two floors, this impressive apartment delivers generous proportions and a strong sense of privacy in the heart of Mayfair. The open-plan reception and kitchen space is ideal for entertaining, while all three bedrooms are well balanced and supported by beautifully appointed bathrooms. A polished, high-end specification runs throughout, making this an exceptional prime central London residence.',
		keyFeatures: [
			'Duplex layout',
			'Three en-suite bedrooms',
			'Statement open-plan reception',
			'Air conditioning',
			'Premium integrated appliances',
			'Excellent storage throughout',
		],
		locationHighlights: [
			'Moments from Hyde Park',
			'Close to Park Lane',
			'Walking distance to Mount Street',
			'Prestigious Green Street setting',
		],
		coverImage: '/properties/green-street-three-bedroom/cover.png',
		images: [
			'/properties/green-street-three-bedroom/cover.png',
			'/properties/green-street-three-bedroom/living-room-1.png',
			'/properties/green-street-three-bedroom/dining-area-1.png',
			'/properties/green-street-three-bedroom/bathroom-1.png',
			'/properties/green-street-three-bedroom/bedroom-1.png',
			'/properties/green-street-three-bedroom/kitchen-1.png',
		],
		featured: true,
	},
	{
		id: 'prop-004',
		slug: 'rutland-gate-three-bedroom',
		title: 'Luxury Three-Bedroom Apartment, Rutland Gate',
		listingType: 'sale',
		status: 'available',
		price: 3950000,
		priceLabel: '£3,950,000',
		currency: 'GBP',
		addressLine: 'Rutland Gate, Knightsbridge',
		area: 'Knightsbridge',
		postcode: 'SW7',
		bedrooms: 3,
		bathrooms: 3,
		receptions: 1,
		sizeSqFt: 1496,
		sizeSqM: 139,
		tenure: 'Leasehold',
		leaseYearsRemaining: 136,
		serviceChargeAnnual: 16400,
		groundRentAnnual: 750,
		councilTaxBand: 'H',
		epcRating: 'C',
		shortDescription:
			"A beautifully finished three-bedroom apartment in Knightsbridge, close to Harrods, Hyde Park and the area's finest amenities.",
		description:
			'This elegant Rutland Gate home offers generous internal space, refined interiors and a highly desirable Knightsbridge address. The property includes a bright reception room, contemporary kitchen, three double bedrooms and three bathrooms, all finished to a high standard. Ideal for buyers seeking a polished London base with immediate access to world-class shopping, dining and green space.',
		keyFeatures: [
			'Three bathrooms',
			'High-spec modern kitchen',
			'Excellent proportions',
			'Refurbished interiors',
			'Secure building',
			'Prime Knightsbridge location',
		],
		locationHighlights: [
			'Close to Harrods',
			'Near Hyde Park',
			'Easy access to South Kensington',
			'Prestigious Rutland Gate address',
		],
		coverImage: '/properties/rutland-gate-three-bedroom/cover.jpeg',
		images: [
			'/properties/rutland-gate-three-bedroom/cover.jpeg',
			'/properties/rutland-gate-three-bedroom/living-room-1.jpeg',
			'/properties/rutland-gate-three-bedroom/living-room-2.jpeg',
			'/properties/rutland-gate-three-bedroom/bedroom-1.jpeg',
			'/properties/rutland-gate-three-bedroom/bathroom-1.jpeg',
		],
		featured: true,
	},
	{
		id: 'prop-005',
		slug: 'beaufort-gardens-two-bedroom',
		title: 'Contemporary Two-Bedroom Apartment, Beaufort Gardens',
		listingType: 'sale',
		status: 'available',
		price: 2650000,
		priceLabel: '£2,650,000',
		currency: 'GBP',
		addressLine: 'Beaufort Gardens, Knightsbridge',
		area: 'Knightsbridge',
		postcode: 'SW3',
		bedrooms: 2,
		bathrooms: 2,
		receptions: 1,
		sizeSqFt: 1188,
		sizeSqM: 110,
		tenure: 'Leasehold',
		leaseYearsRemaining: 114,
		serviceChargeAnnual: 13200,
		groundRentAnnual: 650,
		councilTaxBand: 'G',
		epcRating: 'C',
		shortDescription:
			'A smartly presented two-bedroom apartment with balanced proportions and sophisticated interiors in sought-after Beaufort Gardens.',
		description:
			'Finished in a clean, modern palette, this Knightsbridge apartment is arranged to maximise light, comfort and day-to-day practicality. The reception room is generously sized for entertaining, while the principal suite and second bedroom both offer strong built-in storage. Well suited to owner-occupiers and investors alike, the property delivers prime London living in a quiet residential setting.',
		keyFeatures: [
			'Quiet residential street',
			'Two double bedrooms',
			'Two modern bathrooms',
			'Stylish fitted kitchen',
			'Wood flooring',
			'Built-in storage',
		],
		locationHighlights: [
			'Close to Brompton Road',
			'Near Knightsbridge amenities',
			'Easy reach of Hyde Park',
			'Desirable SW3 address',
		],
		coverImage: '/properties/beaufort-gardens-two-bedroom/cover.png',
		images: [
			'/properties/beaufort-gardens-two-bedroom/cover.png',
			'/properties/beaufort-gardens-two-bedroom/bedroom-1.png',
			'/properties/beaufort-gardens-two-bedroom/kitchen-1.png',
			'/properties/beaufort-gardens-two-bedroom/bathrom-1.png',
		],
		featured: true,
	},
	{
		id: 'prop-006',
		slug: 'wilton-place-one-bedroom',
		title: 'Chic One-Bedroom Apartment, Wilton Place',
		listingType: 'sale',
		status: 'available',
		price: 1395000,
		priceLabel: '£1,395,000',
		currency: 'GBP',
		addressLine: 'Wilton Place, Knightsbridge',
		area: 'Knightsbridge',
		postcode: 'SW1X',
		bedrooms: 1,
		bathrooms: 1,
		receptions: 1,
		sizeSqFt: 612,
		sizeSqM: 57,
		tenure: 'Leasehold',
		leaseYearsRemaining: 117,
		serviceChargeAnnual: 8800,
		groundRentAnnual: 450,
		councilTaxBand: 'G',
		epcRating: 'D',
		shortDescription:
			'A bright and immaculately presented one-bedroom apartment on a prestigious Knightsbridge address beside Hyde Park.',
		description:
			"This stylish apartment offers an excellent opportunity to acquire a prime central London home in one of the city's most recognisable neighbourhoods. The accommodation includes a well-proportioned reception room, modern kitchen, generous double bedroom and contemporary bathroom. It is a superb choice for a pied-à-terre, first London base or long-term investment.",
		keyFeatures: [
			'Prime SW1X location',
			'Well-presented throughout',
			'Separate modern kitchen',
			'Excellent storage',
			'Bright reception room',
			'Ideal pied-à-terre',
		],
		locationHighlights: [
			'Beside Hyde Park',
			'Moments from Harvey Nichols',
			'Close to Belgravia',
			'Prestigious Wilton Place address',
		],
		coverImage: '/properties/wilton-place-one-bedroom/cover.png',
		images: [
			'/properties/wilton-place-one-bedroom/cover.png',
			'/properties/wilton-place-one-bedroom/bedroom-1.jpeg',
			'/properties/wilton-place-one-bedroom/kitchen-1.jpeg',
			'/properties/wilton-place-one-bedroom/bathroom-1.jpeg',
		],
		featured: false,
	},
]
