import Image from 'next/image'

interface RennerCardProps {
  naam: string
  foto?: string
  leeftijd?: number
  categorie?: string
  beschrijving?: string
}

export default function RennerCard({ naam, foto, leeftijd, categorie, beschrijving }: RennerCardProps) {
  return (
    <div className="bg-dark-light rounded-lg overflow-hidden group hover:ring-2 hover:ring-primary transition-all">
      {/* Foto */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={foto || '/uploads/placeholder.jpg'}
          alt={naam}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold">{naam}</h3>
        
        <div className="flex items-center gap-4 mt-2 text-sm">
          {categorie && (
            <span className="bg-primary px-2 py-1 rounded text-white font-medium">
              {categorie}
            </span>
          )}
          {leeftijd && (
            <span className="text-gray-400">{leeftijd} jaar</span>
          )}
        </div>

        {beschrijving && (
          <p className="text-gray-400 mt-3 text-sm line-clamp-3">{beschrijving}</p>
        )}
      </div>
    </div>
  )
}
