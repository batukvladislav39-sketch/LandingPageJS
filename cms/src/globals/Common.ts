import type { GlobalConfig } from "payload";

export const Common: GlobalConfig = {
    slug: 'common',
    access: {read: () => true},
    label: 'Site settings',
    fields: [
        {name: 'siteName', type: 'text', label: 'Site name', required: true},
        {name: 'menu', type: 'array', label: 'Main menu', fields: [
            {name: 'label', type: 'text', label: 'Menu label name', required: true},
            {name: 'link', type: 'text', label: 'Menu link name', required: true},
        ]},
        {name: 'footer', type: 'group', label: 'Footer', fields: [
            {name: 'text', type: 'text'}
        ]}
    ]
}