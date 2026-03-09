import { SectionHeader } from '@/components/ui/SectionHeader';
import { PropertyCard } from '@/components/ui/PropertyCard';
import { properties } from '@/data/properties';

export function PropertiesSection() {
  return (
    <section id="properties" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="A CURATED COLLECTION OF EXCEPTIONAL RESIDENCES" subtitle="Featured Properties" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
