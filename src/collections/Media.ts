import type { CollectionConfig } from 'payload';

import {
    FixedToolbarFeature,
    InlineToolbarFeature,
    lexicalEditor
} from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';
import access from '@/access';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        create: access.authenticated,
        delete: access.authenticated,
        read: access.anyone,
        update: access.authenticated
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            defaultValue: 'alt text missing - please update'
        },
        {
            name: 'caption',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
                }
            })
        }
    ],
    upload: {
        staticDir: path.resolve(dirname, '../assets/media'), // is this good?
        adminThumbnail: 'thumbnail'

        // imageSizes: [
        //     {
        //         name: 'thumbnail',
        //         width: 300
        //     },
        //     {
        //         name: 'square',
        //         width: 500,
        //         height: 500
        //     },
        //     {
        //         name: 'small',
        //         width: 600
        //     },
        //     {
        //         name: 'medium',
        //         width: 900
        //     },
        //     {
        //         name: 'large',
        //         width: 1400
        //     },
        //     {
        //         name: 'xlarge',
        //         width: 1920
        //     }
        // ]
    }
};
