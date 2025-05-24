'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getHeroImages, urlFor } from '../sanity/lib/sanityUtils'
import { HeroImage } from '../types/HeroImage'

export default function Header() {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null)

  useEffect(() => {
    async function fetchHeroImage() {
      const images = await getHeroImages()
      if (images.length > 0) setHeroImage(images[0])
    }

    fetchHeroImage()
  }, [])

  return (
    <div className="relative w-full h-screen">
      {heroImage && (
        <Image
          src={urlFor(heroImage.image).url()}
          alt={heroImage.alt || 'Hero image'}
          fill
          className="object-cover"
          priority
        />
      )}
    </div>
  )
}
