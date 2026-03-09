import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { insightPosts } from '@/lib/homepage-data';

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="THOUGHTFUL OBSERVATIONS" subtitle="Market Insights" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightPosts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 relative">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{post.date}</p>
              <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors leading-snug">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 hover:text-white transition-colors">
            Read All Articles <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
