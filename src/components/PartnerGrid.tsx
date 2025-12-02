import Image from 'next/image'

interface Partner {
  title: string
  image: string
  link?: string
}

interface PartnerGridProps {
  partners: Partner[]
}

export default function PartnerGrid({ partners }: PartnerGridProps) {
  if (partners.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        Voeg partners toe via het CMS
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {partners.map((partner, index) => (
        <div key={index} className="group">
          {partner.link ? (
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg p-4 h-24 flex items-center justify-center hover:ring-2 hover:ring-primary transition-all"
            >
              <Image
                src={partner.image || '/uploads/placeholder.jpg'}
                alt={partner.title}
                width={120}
                height={60}
                className="object-contain max-h-16 grayscale group-hover:grayscale-0 transition-all"
              />
            </a>
          ) : (
            <div className="bg-white rounded-lg p-4 h-24 flex items-center justify-center">
              <Image
                src={partner.image || '/uploads/placeholder.jpg'}
                alt={partner.title}
                width={120}
                height={60}
                className="object-contain max-h-16 grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
