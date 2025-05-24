// types/SanityImage.ts
export type SanityImage = {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    caption?: string;
    alt?: string;
  };
  