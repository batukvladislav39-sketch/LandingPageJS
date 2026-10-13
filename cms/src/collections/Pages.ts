import type { CollectionConfig } from "payload";

import { Hero } from "../blocks/Hero";
import { Features } from "../blocks/Features";

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {plural: 'Pages', singular: 'Page'},
    admin: {useAsTitle: 'title'},
    access: {read: () => true},
    fields: [
        {name: 'path', type: 'text', label: 'Page address', required: true, unique: true, defaultValue: '/'},
        {name: 'title', type: 'text', label: 'Page name', required: true},
        {name: 'blocks', type: 'blocks', label: 'Blocks', 
            blocks: [
                Hero, Features
            ]},
    ]
}