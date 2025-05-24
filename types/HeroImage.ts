// types/heroImage.ts
export interface HeroImage {
    _id?: string;
    _type: 'heroImage';
    title: string;
    image: {
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
    };
    alt: string;
  }
  