import { Block } from "payload";

export const Hero: Block = {
    slug: "hero",
    labels: {singular: "Hero", plural: "Hero"},
    fields: [
        {name: "anchor", type: "text", label: "ID sections"},
        {name: "bage", type: "text", label: "Badge on main"},
        {name: "title", type: "text", label: "Title", required: true},
        {name: "subtitle", type: "text", label: "Subtitle"},
        {name: "image", type: "upload", relationTo: "media",label: "Image"},
        {name: "buttons", type: "array", label: "Buttons", maxRows: 2,
            fields: [
                {name: "text", type: "text", required: true},
                {name: "link", type: "text", required: true},
                {name: "variant", type: "select", defaultValue: "primary",
                    options: [
                        {label: "Main", value: "primary"},
                        {label: "Second", value: "secondary"},
                    ]
                }
            ]
        }
    ]
}