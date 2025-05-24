// ./desk/structure.ts
import type { StructureResolver } from 'sanity/structure';
import { DocumentIcon, ImageIcon, FolderIcon } from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Albums Section
      S.listItem()
        .title('Albums')
        .icon(FolderIcon)
        .child(
          S.documentTypeList('photographerAlbum')
            .title('Albums')
        ),

      // Divider
      S.divider(),

      // Site Settings Section
      S.listItem()
        .title('Featured Image')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Featured Image')
            .items([
              S.listItem()
                .title('Hero Images')
                .icon(ImageIcon)
                .child(
                  S.documentTypeList('heroImage')
                    .title('Hero Images')
                ),
            ])
        ),
    ]);
