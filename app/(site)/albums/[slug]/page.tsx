import { notFound } from 'next/navigation'
import { getPhotographerAlbumBySlug } from '@/sanity/lib/sanityUtils'
import GallerySlider from '../../../../components/GallerySlider'

export type ParamsType = Promise<{ slug: string }>

export default async function AlbumPage(props: { params: ParamsType}) {
  const {slug} = await props.params // assuming the slug is the first item
  if (!slug) return notFound()

  const album = await getPhotographerAlbumBySlug(slug)
  if (!album) return notFound()

  return (
    <main className="max-w-full   p-16  mt-6">
 
<h1 className="text-5xl mt-20 font-bold mb-8">{album.albumTitle}</h1> 
    {/* Pass album images and title to client component       */}
    <GallerySlider images={album.images ?? []} albumTitle={album.albumTitle} />
  </main>
  )
}
