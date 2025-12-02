import { getCollection } from '@/lib/content'
import RennerCard from '@/components/RennerCard'
import SectionHeader from '@/components/SectionHeader'

export const revalidate = 60

export const metadata = {
  title: 'Team | DLS Invigo',
  description: 'Ontdek de renners van wielerploeg DLS Invigo',
}

export default function TeamPage() {
  const renners = getCollection('renners')

  // Groepeer renners per categorie
  const categorieën = renners.reduce((acc: any, renner: any) => {
    const cat = renner.categorie || 'Overige'
    if (!acc[cat]) {
      acc[cat] = []
    }
    acc[cat].push(renner)
    return acc
  }, {})

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Ons team"
          subtitle="De renners van DLS Invigo"
        />

        {Object.keys(categorieën).length > 0 ? (
          Object.entries(categorieën).map(([categorie, rennersInCat]: [string, any]) => (
            <div key={categorie} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold mb-6 text-primary">{categorie}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {rennersInCat.map((renner: any) => (
                  <RennerCard
                    key={renner.slug}
                    naam={renner.naam}
                    foto={renner.foto}
                    leeftijd={renner.leeftijd}
                    categorie={renner.categorie}
                    beschrijving={renner.beschrijving}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Nog geen renners toegevoegd.
            </p>
            <p className="text-gray-500 mt-2">
              Voeg renners toe via het CMS op /admin
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
