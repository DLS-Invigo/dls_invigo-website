import Image from 'next/image'
import Link from 'next/link'

interface HighlightSectionProps {
  title: string
  description?: string
  image?: string
  link?: string
  linkText?: string
  reversed?: boolean
}

export default function HighlightSection({
  title,
  description,
  image,
  link,
  linkText = 'Meer info',
  reversed = false,
}: HighlightSectionProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Afbeelding */}
      <div className={`relative h-64 md:h-96 rounded-lg overflow-hidden ${reversed ? 'md:order-2' : ''}`}>
        <Image
          src={image || '/uploads/placeholder.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className={reversed ? 'md:order-1' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        {description && (
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        )}
        {link && (
          <Link href={link} className="btn-primary inline-block">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  )
}
