import { type SchemaTypeDefinition } from 'sanity'
import { heroImage } from '../schemas/heroImage'
import { photographerAlbum } from '../schemas/photographerAlbum'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImage, photographerAlbum],
}
 