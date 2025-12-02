interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-3 text-lg">{subtitle}</p>
      )}
      <div className={`w-20 h-1 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
