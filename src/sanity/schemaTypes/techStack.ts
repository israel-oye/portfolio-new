import { defineField, defineType } from 'sanity'

export const techStack = defineType({
    name: 'techStack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon (SVG or Image)',
            type: 'image',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Language', value: 'language' },
                    { title: 'Framework', value: 'framework' },
                    { title: 'Tool', value: 'tool' },
                    { title: 'Database', value: 'database' },
                ],
            },
        }),
    ],
})
