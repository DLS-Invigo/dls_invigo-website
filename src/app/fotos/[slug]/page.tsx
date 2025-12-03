import { getCollection, getCollectionItem } from '@/lib/content'
import { notFound } from 'next/navigation'
import FotoalbumClient from './FotoalbumClient'

export const revalidate = 60

export async function generateStaticParams() {
  const items = getCollection('fotoalbums')
  return items.map((item: any) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getCollectionItem('fotoalbums', slug) as any

  if (!item) {
    return { title: 'Niet gevonden | DLS Invigo' }
  }

  return {
    title: `${item.title} | Foto's | DLS Invigo`,
    description: item.description || `Fotoalbum van DLS Invigo`,
  }
}

export default async function FotoalbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const album = getCollectionItem('fotoalbums', slug) as any

  if (!album) {
    notFound()
  }

  return <FotoalbumClient album={album} />
}
