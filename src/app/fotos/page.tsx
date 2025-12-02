import { getCollection, sortByDate } from '@/lib/content'
import FotoalbumCard from '@/components/FotoalbumCard'
import SectionHeader from '@/components/SectionHeader'

export const revalidate = 60

export const metadata = {
  title: "Foto's | DLS Invigo",
  description: "Fotoalbums van wielerploeg DLS Invigo",
}

export default function FotosPage() {
  const albums = sortByDate(getCollection('fotoalbums'))

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Foto's"
          subtitle="Bekijk onze fotoalbums"
        />

        {albums.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album: any) => (
              <FotoalbumCard
                key={album.slug}
                slug={album.slug}
                title={album.title}
                coverImage={album.coverImage || (album.images && album.images[0])}
                aantalFotos={album.images?.length}
                date={album.date}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              Nog geen fotoalbums.
            </p>
            <p className="text-gray-500 mt-2">
              Voeg fotoalbums toe via het CMS op /admin
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
