import { getCollection, getCollectionItem, markdownToHtml } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'

export const revalidate = 60

// Genereer alle mogelijke paden voor static generation
export async function generateStaticParams() {
  const items = getCollection('nieuws')
  return items.map((item: any) => ({
    slug: item.slug,
  }))
}

// Metadata voor SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getCollectionItem('nieuws', slug) as any

  if (!item) {
    return { title: 'Niet gevonden | DLS Invigo' }
  }

  return {
    title: `${item.title} | DLS Invigo`,
    description: item.excerpt || `Nieuwsbericht van DLS Invigo`,
  }
}

export default async function NieuwsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getCollectionItem('nieuws', slug) as any

  if (!item) {
    notFound()
  }

  const contentHtml = await markdownToHtml(item.content || '')

  const formattedDate = new Date(item.date).toLocaleDateString('nl-BE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="section-padding">
      <div className="container-custom max-w-4xl">
        {/* Terug link */}
        <Link
          href="/nieuws"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Terug naar nieuws
        </Link>

        {/* Header */}
        <header className="mb-8">
          <time className="text-primary font-medium">{formattedDate}</time>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">{item.title}</h1>
        </header>

        {/* Afbeelding */}
        {item.image && (
          <div className="relative h-64 md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none 
            prose-headings:text-white prose-p:text-gray-300
            prose-a:text-primary prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Externe link */}
        {item.externalLink && (
          <div className="mt-10 pt-8 border-t border-dark-lighter">
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Meer lezen
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
