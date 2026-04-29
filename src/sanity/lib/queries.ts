import { defineQuery } from "next-sanity";

export const EXPERIENCES_QUERY = defineQuery(`*[_type == "experience"] | order(startDate desc) {
  _id,
  company,
  role,
  startDate,
  endDate,
  isCurrent,
  description,
  technologies[]->{
    name,
    icon
  }
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  "imageUrl": mainImage.asset->url,
  link,
  githubLink,
  technologies[]->{
    name,
    icon
  }
}`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  "imageUrl": mainImage.asset->url,
  link,
  githubLink,
  technologies[]->{
    name,
    "icon": icon.asset->url
  },
  "projectImages": projectImages[] {
    "url": asset->url,
    caption,
    alt
  },
  details {
    role,
    duration,
    overview,
    designChoices,
    engineeringApproach,
    challenges
  }
}`);

export const TECH_STACK_QUERY = defineQuery(`*[_type == "techStack"] | order(category asc) {
  _id,
  name,
  "icon": icon.asset->url,
  category
}`);

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{
  "resumeUrl": resume.asset->url
}`);
