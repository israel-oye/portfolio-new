import { sanityFetch } from "@/sanity/lib/fetch";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Section from "@/components/ui/Section";
import FeaturedProjectsClient from "./FeaturedProjectsClient";

const fallbackProjects = [
    {
        title: "Stash-It",
        description:
            "Academic file repository system supporting 10GB uploads using Backblaze B2 cloud storage. Built to handle large-scale academic data sharing.",
        tags: ["Flask", "Backblaze B2", "Bootstrap"],
        links: {
            github: "https://github.com",
            demo: "#",
        },
    },
    {
        title: "Check-Am",
        description:
            "Web application for Nigerian telecom number validation with provider identification. Helps users verify and identify network providers instantly.",
        tags: ["JavaScript", "CSS", "Validation"],
        links: {
            github: "https://github.com",
            demo: "#",
        },
    },
    {
        title: "Footy-Players",
        description:
            "Automated web scraper script collecting 100+ football player images and data. Uses Selenium for automation and MongoDB for data persistence.",
        tags: ["Selenium", "MongoDB", "Python"],
        links: {
            github: "https://github.com",
            demo: "#",
        },
    },
];

export default async function FeaturedProjects() {
    let projects = fallbackProjects;

    try {
        const data = await sanityFetch({ query: PROJECTS_QUERY });
        if (data && data.length > 0) {
            projects = data.map((item: any) => ({
                title: item.title,
                slug: item.slug?.current || '',
                description: item.description,
                tags: item.technologies ? item.technologies.map((t: any) => t.name) : [],
                imageUrl: item.imageUrl,
                links: {
                    github: item.githubLink || "",
                    demo: item.link || "",
                },
            }));
        }
    } catch (error) {
        console.error("Failed to fetch projects:", error);
    }

    return (
        <Section id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A selection of projects that demonstrate my ability to solve real-world
                    problems with code.
                </p>
            </div>

            <FeaturedProjectsClient projects={projects} />
        </Section>
    );
}
