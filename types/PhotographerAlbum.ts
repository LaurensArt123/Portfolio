export interface PhotographerAlbum {
    _id?: string;
    _type: 'photographerAlbum';
    albumTitle: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    description: string;
    coverImage?: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
      hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
      alt?: string;
    };
    images: Array<{
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
      hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
      caption?: string;
      alt?: string;
    }>;
  }
  