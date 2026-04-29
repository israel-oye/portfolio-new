import Section from "@/components/ui/Section";
import ExperienceClient from "./ExperienceClient";

const fallbackExperiences = [
    {
        company: "Osun State University Alumni Association",
        role: "Freelance Backend Engineer",
        period: "02/2026 - Present",
        description:
            "Leading the development and maintenance of the backend system of Osun State University Alumni Association member portal. Architected and deployed a production ledger API covering member management and dues billing including Paystack payment integration.",
        tags: ["Backend", "Payment Gateway Integration", "Production", "API Design"],
    },
    {
        company: "ScalaWares",
        role: "Backend Developer",
        period: "08/2025 - Present",
        description:
            "Designed and implemented 72 API endpoints for multi-tenant enterprise CRM system. Built secure authentication infrastructure supporting JWT and OAuth2. Implemented a backend for an AI-assisted receipt-details extractor.",
        tags: ["Python", "Django", "FastAPI", "OAuth2", "API Design", "AI"],
    },
    {
        company: "Aptech Computer Education",
        role: "Faculty Instructor",
        period: "01/2025 - Present",
        description:
            "Instructed 50+ students in full-stack development and software engineering principles.",
        tags: ["Teaching", "Mentorship"],
    },
    {
        company: "Proofly/CerVer",
        role: "Backend Developer",
        period: "09/2025 - 10/2025",
        description:
            "Architected authentication system for verification platform. Implemented JWT-based authentication with secure refresh token rotation.",
        tags: ["Security", "JWT", "Architecture"],
    },
    {
        company: "Rendo AI",
        role: "Backend Developer",
        period: "03/2024 - 12/2024",
        description:
            "Developed email notification system and contact management APIs. Implemented Docker containerization for consistent deployment.",
        tags: ["Docker", "API Development"],
    },
    {
        company: "Pusheat",
        role: "Backend Developer",
        period: "02/2024 - 08/2024",
        description:
            "Developed test suite using pytest. Built RESTful APIs with focus on maintainability and documentation using OpenAPI/Swagger.",
        tags: ["Testing", "Pytest", "Swagger"],
    },
];

export default function Experience() {
    const experiences = fallbackExperiences;

    return (
        <Section id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Work <span className="text-primary">Experience</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    My professional journey in building scalable systems and teaching the
                    next generation of developers.
                </p>
            </div>

            <ExperienceClient experiences={experiences} />
        </Section>
    );
}
