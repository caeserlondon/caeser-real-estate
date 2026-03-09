export function SectionHeader({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">{subtitle}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
        {title}
      </h2>
      <div className={`h-[1px] w-24 bg-gold mt-8 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
