'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PhotographerAlbum } from '../types/PhotographerAlbum'
import { getPhotographerAlbums, urlFor } from '../sanity/lib/sanityUtils'

export default function Portfolio() {
  const [albums, setAlbums] = useState<PhotographerAlbum[]>([])

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const data = await getPhotographerAlbums()
        setAlbums(data)
      } catch (error) {
        console.error('Error fetching albums:', error)
      }
    }

    fetchAlbums()
  }, [])

  if (albums.length === 0) {
    return <div>Loading albums...</div>
  }

  return (
    <section className="max-w-full mx-auto px-4 md:py-24 mt-8">
      <h2 className="text-7xl font-bold text-center mb-10 mt-20">PORTFOLIO</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-10">
        {albums.map(({ _id, albumTitle, coverImage, slug }) => {
          // Safely build URL from coverImage.asset._ref or fallback to empty string
          const imageUrl = coverImage ? urlFor(coverImage.asset._ref).url() : ''

          return (
            <a
              key={_id}
              href={`/albums/${slug.current}`} // Assuming you have a dynamic route for albums
              className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg group cursor-pointer block"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={albumTitle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span className="text-gray-700">No Cover Image</span>
                </div>
              )}

              {/* Title overlay always visible */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl sm:text-5xl font-semibold drop-shadow-lg">
                  {albumTitle}
                </h3>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
