'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface FotoalbumClientProps {
  album: {
    title: string
    date?: string
    description?: string
    images?: string[]
  }
}

export default function FotoalbumClient({ album }: FotoalbumClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = album.images || []

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const formattedDate = album.date
    ? new Date(album.date).toLocaleDateString('nl-BE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <>
      <div className="section-padding">
        <div className="container-custom">
          {/* Terug link */}
          <Link
            href="/fotos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Terug naar albums
          </Link>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold">{album.title}</h1>
            {formattedDate && (
              <time className="text-primary font-medium mt-2 block">{formattedDate}</time>
            )}
            {album.description && (
              <p className="text-gray-400 mt-4 max-w-2xl">{album.description}</p>
            )}
          </header>

          {/* Foto grid */}
          {images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${album.title} - Foto ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-12">
              Nog geen foto&apos;s in dit album.
            </p>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center">
          {/* Sluit knop */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary p-2"
          >
            <X size={32} />
          </button>

          {/* Vorige knop */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-primary p-2"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Afbeelding */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] m-4">
            <Image
              src={images[currentImage]}
              alt={`${album.title} - Foto ${currentImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Volgende knop */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-primary p-2"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Teller */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
