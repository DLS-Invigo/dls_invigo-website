'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Banner {
  title: string
  image: string
  description?: string
  link?: string
}

interface HeroSliderProps {
  banners: Banner[]
}

export default function HeroSlider({ banners }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide elke 5 seconden
  useEffect(() => {
    if (banners.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [banners.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  if (banners.length === 0) {
    return (
      <div className="relative h-[60vh] md:h-[80vh] bg-dark-light flex items-center justify-center">
        <p className="text-gray-400">Voeg banners toe via het CMS</p>
      </div>
    )
  }

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Achtergrond afbeelding */}
          <div className="absolute inset-0">
            <Image
              src={banner.image || '/uploads/placeholder.jpg'}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-end pb-16 md:pb-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
              {banner.description && (
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  {banner.description}
                </p>
              )}
              {banner.link && (
                <a href={banner.link} className="btn-primary inline-block">
                  Meer info
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigatie pijlen */}
      {banners.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-primary p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-primary p-2 rounded-full transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {banners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
