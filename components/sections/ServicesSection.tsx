import { Globe, Building2, TrendingUp } from 'lucide-react';
import { services } from '@/lib/homepage-data';

const serviceIcons = [
  <Globe key="globe" className="w-8 h-8 text-gold" />,
  <Building2 key="building" className="w-8 h-8 text-gold" />,
  <TrendingUp key="trending" className="w-8 h-8 text-gold" />,
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 border border-white/5 hover:border-gold/50 bg-neutral-900/50 transition-colors duration-300">
              <div className="mb-6 p-4 bg-neutral-950 inline-block border border-white/5 group-hover:border-gold/30 transition-colors">
                {serviceIcons[index]}
              </div>
              <h3 className="font-serif text-xl text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
