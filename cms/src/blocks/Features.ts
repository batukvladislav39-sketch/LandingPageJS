import { Block } from 'payload';
import { tr } from 'payload/i18n/tr';

export const Features: Block = {
    slug: 'features',
    labels: {singular: 'Feature', plural: 'Features'},
    fields: [
        {name: 'anchor',type: 'text', label: 'ID section'},
        {name: 'title',type: 'text', label: 'Header section', required: true},
        {name: 'items',type: 'array', label: 'Our feature', 
            fields: [
                {name: 'icon', type: 'text', label: 'Icon', required: true},
                {name: 'title', type: 'text', label: 'Title', required: true},
                {name: 'text', type: 'textarea', label: 'Description'},
            ]
        },
    ]
}