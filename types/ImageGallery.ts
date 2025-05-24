export type ImageGalleryItem = {
    _key: string;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    caption?: string;
    alt?: string;
  };
  