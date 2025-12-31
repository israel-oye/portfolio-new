import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { experience } from './experience'
import { techStack } from './techStack'
import { post } from './post'
import { author } from './author'
import { settings } from './settings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project, experience, techStack, post, author, settings],
}
