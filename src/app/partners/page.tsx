import { getCollection } from '@/lib/content'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'

export const revalidate = 60

export const metadata = {
  title: 'Partners | DLS Invigo',
  description: 'De partners en sponsors van wielerploeg DLS Invigo',
}

export default function PartnersPage() {
  const partners = getCollection('partners')

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Onze partners"
          subtitle="Dankzij hun steun kunnen wij doen wat we graag doen"
          centered
        />

        {partners.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner: any, index: number) => (
              <div
                key={index}
                className="bg-dark-light rounded-lg p-8 flex flex-col items-center text-center hover:ring-2 hover:ring-primary transition-all"
              >
                {/* Logo */}
                <div className="bg-white rounded-lg p-6 mb-6 w-full">
                  <div className="relative h-24">
                    <Image
                      src={partner.image || '/uploads/placeholder.jpg'}
                      alt={partner.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Naam */}
                <h3 className="text-xl font-semibold">{partner.title}</h3>

                {/* Beschrijving */}
                {partner.description && (
                  <p className="text-gray-400 mt-2 text-sm">{partner.description}</p>
                )}

                {/* Link */}
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6"
                  >
                    Bezoek website
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Nog geen partners toegevoegd.
            </p>
            <p className="text-gray-500 mt-2">
              Voeg partners toe via het CMS op /admin
            </p>
          </div>
        )}

        {/* Word partner sectie */}
        <div className="mt-20 bg-dark-light rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Word partner</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Geïnteresseerd om partner te worden van DLS Invigo? 
            Neem contact met ons op voor de mogelijkheden.
          </p>
          <a href="/contact" className="btn-primary">
            Neem contact op
          </a>
        </div>
      </div>
    </div>
  )
}
