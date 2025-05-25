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
    return (
      <div className="text-center py-24 text-xl uppercase tracking-widest text-gray-500">
        Loading albums...
      </div>
    )
  }

  return (
    <section className="mx-auto px-4 md:py-24 mt-8">
      <h2 className="text-center text-5xl sm:text-7xl font-bold uppercase tracking-wider mb-10 mt-20">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-10">
        {albums.map(({ _id, albumTitle, coverImage, slug }) => {
          const imageUrl = coverImage ? urlFor(coverImage.asset._ref).url() : ''

          return (
            <a
              key={_id}
              href={`/albums/${slug.current}`}
              className="relative w-full aspect-[16/9] overflow-hidden   shadow-lg group block transition-transform duration-300 hover:scale-[1.015]"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={albumTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <span className="text-gray-700 uppercase tracking-widest text-sm">
                    No Cover Image
                  </span>
                </div>
              )}

              {/* Always-visible title overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl sm:text-3xl font-semibold drop-shadow-xl uppercase tracking-wider text-center px-4">
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
