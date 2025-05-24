import { notFound } from 'next/navigation'
import { getPhotographerAlbums } from '@/sanity/lib/sanityUtils'
import GallerySlider from '../../../components/GallerySlider'

async function getAlbumBySlug(slug: string) {
  const albums = await getPhotographerAlbums()
  return albums.find(album => album.slug.current === slug)
}

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug)

  if (!album) return notFound()

  return (
    <main className="max-w-screen-xl   p-16 mt-36">
 

      {/* Pass album images and title to client component   <h1 className="text-5xl font-bold mb-8">{album.albumTitle}</h1>     */}
      <GallerySlider images={album.images ?? []} albumTitle={album.albumTitle} />
    </main>
  )
}
