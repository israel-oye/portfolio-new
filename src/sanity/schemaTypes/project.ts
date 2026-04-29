import { defineField, defineType } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'techStack' } }],
        }),
        defineField({
            name: 'link',
            title: 'Project Link',
            type: 'url',
        }),
        defineField({
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        }),
        defineField({
            name: 'details',
            title: 'Project Details',
            type: 'object',
            fields: [
                defineField({ name: 'role', title: 'My Role', type: 'string' }),
                defineField({ name: 'duration', title: 'Duration', type: 'string' }),
                defineField({ name: 'overview', title: 'Overview', type: 'array', of: [{ type: 'block' }] }),
                defineField({ name: 'designChoices', title: 'Design Choices', type: 'array', of: [{ type: 'block' }] }),
                defineField({ name: 'engineeringApproach', title: 'Engineering Approach', type: 'array', of: [{ type: 'block' }] }),
                defineField({ name: 'challenges', title: 'Challenges & Solutions', type: 'array', of: [{ type: 'block' }] }),
            ],
        }),
        defineField({
            name: 'projectImages',
            title: 'Project Images',
            description: 'System design diagrams, ERDs, screenshots, architecture diagrams, etc.',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                            description: 'e.g. "System Architecture Diagram" or "Entity Relationship Diagram"',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        }),
                    ],
                },
            ],
        }),
    ],
})
