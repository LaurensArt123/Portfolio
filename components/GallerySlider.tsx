'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/sanityUtils'

type GallerySliderProps = {
  images: { asset: { _ref: string } }[]
  albumTitle: string
}

export default function GallerySlider({ images, albumTitle }: GallerySliderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const imageUrls = images.map(img => urlFor(img.asset._ref).url())

  function openSlider(index: number) {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  function closeSlider() {
    setIsOpen(false)
  }

  function prevImage() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <>
    <div className=''>


    {/* Thumbnails grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mx-auto">
        {imageUrls.map((url, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/3]   overflow-hidden cursor-pointer mx-auto" 
            onClick={() => openSlider(i)}
          >
            <Image
              src={url}
              alt={`${albumTitle} image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Slider modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeSlider}
        >
          <button
            onClick={e => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 text-white text-4xl font-bold select-none"
            aria-label="Previous Image"
          >
            ‹
          </button>

          <div className="relative w-4/5 h-4/5 max-w-5xl max-h-[80vh]">
            <Image
              src={imageUrls[currentIndex]}
              alt={`${albumTitle} image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={e => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 text-white text-4xl font-bold select-none"
            aria-label="Next Image"
          >
            ›
          </button>

          <button
            onClick={e => {
              e.stopPropagation()
              closeSlider()
            }}
            className="absolute top-4 right-4 text-white text-3xl select-none"
            aria-label="Close Gallery"
          >
            ✕
          </button>
        </div>
      )}


    </div>
  
    </>
  )
}
