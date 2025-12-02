import Image from 'next/image'
import Link from 'next/link'

interface NieuwsCardProps {
  slug: string
  title: string
  date: string
  image?: string
  excerpt?: string
}

export default function NieuwsCard({ slug, title, date, image, excerpt }: NieuwsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('nl-BE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/nieuws/${slug}`} className="group block">
      <article className="bg-dark-light rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all">
        {/* Afbeelding */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={image || '/uploads/placeholder.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <time className="text-sm text-primary font-medium">{formattedDate}</time>
          <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          {excerpt && (
            <p className="text-gray-400 mt-2 line-clamp-2 text-sm">{excerpt}</p>
          )}
        </div>
      </article>
    </Link>
  )
}
