import { defineField, defineType } from 'sanity'

export const settings = defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
            options: {
                accept: '.pdf',
            },
        }),
    ],
})
