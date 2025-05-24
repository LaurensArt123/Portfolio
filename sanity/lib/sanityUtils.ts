import { HeroImage } from '../../types/HeroImage'
import { PhotographerAlbum } from '../../types/PhotographerAlbum'
import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'default-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'default-dataset'

const imageUrlBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: any) => imageUrlBuilder.image(source)

export async function getHeroImages(): Promise<HeroImage[]> {
  return client.fetch(
    groq`*[_type == "heroImage"] {
      _id,
      title,
      alt,
      image {
        _type,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop
      }
    }`
  )
}

export async function getHeroImageByTitle(title: string): Promise<HeroImage | null> {
  const data = await client.fetch(
    groq`*[_type == "heroImage" && title == $title][0] {
      _id,
      title,
      alt,
      image {
        _type,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop
      }
    }`,
    { title }
  )
  return data || null
}

export async function getPhotographerAlbums(): Promise<PhotographerAlbum[]> {
  return client.fetch(
    groq`*[_type == "photographerAlbum"] {
      _id,
      albumTitle,
      slug {
        current
      },
      description,
      coverImage {
        _type,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop,
        alt
      },
      images[] {
        _key,
        caption,
        alt,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop
      }
    }`
  )
}

export async function getPhotographerAlbumBySlug(slug: string): Promise<PhotographerAlbum | null> {
  const data = await client.fetch(
    groq`*[_type == "photographerAlbum" && slug.current == $slug][0] {
      _id,
      albumTitle,
      slug {
        current
      },
      description,
      coverImage {
        _type,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop,
        alt
      },
      images[] {
        _key,
        caption,
        alt,
        asset {
          _ref,
          _type
        },
        hotspot,
        crop
      }
    }`,
    { slug }
  )
  return data || null
}
