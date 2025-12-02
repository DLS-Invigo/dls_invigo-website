import Image from 'next/image'
import Link from 'next/link'
import { Camera } from 'lucide-react'

interface FotoalbumCardProps {
  slug: string
  title: string
  coverImage?: string
  aantalFotos?: number
  date?: string
}

export default function FotoalbumCard({ slug, title, coverImage, aantalFotos, date }: FotoalbumCardProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('nl-BE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <Link href={`/fotos/${slug}`} className="group block">
      <div className="bg-dark-light rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all">
        {/* Cover afbeelding */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={coverImage || '/uploads/placeholder.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent" />
          
          {/* Aantal foto's badge */}
          {aantalFotos && (
            <div className="absolute top-3 right-3 bg-dark/80 px-3 py-1 rounded-full flex items-center gap-1 text-sm">
              <Camera size={16} />
              <span>{aantalFotos}</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          {formattedDate && (
            <time className="text-sm text-gray-400 mt-1 block">{formattedDate}</time>
          )}
        </div>
      </div>
    </Link>
  )
}
