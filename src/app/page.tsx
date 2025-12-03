import { getCollection, sortByDate, getSingleton } from '@/lib/content'
import HeroSlider from '@/components/HeroSlider'
import NieuwsCard from '@/components/NieuwsCard'
import PartnerGrid from '@/components/PartnerGrid'
import SectionHeader from '@/components/SectionHeader'
import HighlightSection from '@/components/HighlightSection'
import Image from 'next/image'
import Link from 'next/link'

// ISR: herlaad elke 60 seconden
export const revalidate = 60

export default function HomePage() {
  // Haal alle content op
  const banners = getCollection('banners') as any[]
  const nieuwsItems = sortByDate(getCollection('nieuws')).slice(0, 3)
  const partners = getCollection('partners') as any[]
  const homepage = getSingleton('homepage/settings') as any

  return (
    <>
      {/* Hero slider */}
      <HeroSlider banners={banners} />

      {/* Highlight sectie */}
      {homepage?.highlightTitle && (
        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <HighlightSection
              title={homepage.highlightTitle}
              description={homepage.highlightDescription}
              image={homepage.highlightImage}
              link={homepage.highlightLink}
            />
          </div>
        </section>
      )}

      {/* Laatste nieuws */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Laatste nieuws"
            subtitle="Blijf op de hoogte van onze ploeg"
          />
          
          {nieuwsItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nieuwsItems.map((item: any) => (
                <NieuwsCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.title}
                  date={item.date}
                  image={item.image}
                  excerpt={item.excerpt}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-12">
              Nog geen nieuwsberichten. Voeg ze toe via het CMS.
            </p>
          )}

          <div className="text-center mt-10">
            <Link href="/nieuws" className="btn-outline">
              Bekijk al het nieuws
            </Link>
          </div>
        </div>
      </section>

      {/* Teamfoto */}
      {homepage?.teamImage && (
        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <SectionHeader
              title="Ons team"
              subtitle="Samen sterker"
              centered
            />
            <div className="relative h-64 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={homepage.teamImage}
                alt="Team DLS Invigo"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-8">
              <Link href="/team" className="btn-primary">
                Ontdek onze renners
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Onze partners"
            subtitle="Bedankt voor jullie steun"
            centered
          />
          <PartnerGrid partners={partners} />
          <div className="text-center mt-10">
            <Link href="/partners" className="btn-outline">
              Alle partners bekijken
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
