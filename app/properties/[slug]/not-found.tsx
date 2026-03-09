import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RollLink } from '@/components/ui/RollLink';

export default function PropertyNotFound() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24 text-center">
        <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Property Not Found</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
          This listing could not be found
        </h1>
        <p className="text-neutral-400 text-lg font-light max-w-md mx-auto mb-12">
          The property you are looking for may have been removed or the address may have changed.
        </p>
        <RollLink
          href="/#properties"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </RollLink>
      </section>
      <Footer />
    </main>
  );
}
