import Image from 'next/image';
import { awards } from '@/lib/homepage-data';

export function AwardsSection() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header — left aligned, no divider */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            AWARDS
          </h2>
          <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mt-3">
            Recognised for excellence in luxury
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Trophy Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/award.png"
              alt="Crystal award trophy"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Award List */}
          <div>
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-5 border-b border-white/10 last:border-b-0"
              >
                <span className="text-neutral-400 text-sm">
                  {award.org}{award.year ? ` ${award.year}` : ''}
                </span>
                <span className="text-gold text-sm font-medium text-right">
                  {award.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
