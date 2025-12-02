import { getCollection, sortByDate } from '@/lib/content'
import NieuwsCard from '@/components/NieuwsCard'
import SectionHeader from '@/components/SectionHeader'

export const revalidate = 60

export const metadata = {
  title: 'Nieuws | DLS Invigo',
  description: 'Het laatste nieuws van wielerploeg DLS Invigo',
}

export default function NieuwsPage() {
  const nieuwsItems = sortByDate(getCollection('nieuws'))

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Nieuws"
          subtitle="Alle berichten van onze ploeg"
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
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Nog geen nieuwsberichten.
            </p>
            <p className="text-gray-500 mt-2">
              Voeg nieuwsberichten toe via het CMS op /admin
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
