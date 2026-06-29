import Section from "@/components/ui/Section";
import ExperienceClient from "./ExperienceClient";

const fallbackExperiences = [
    {
        company: "Osun State University Alumni Association",
        role: "Freelance Backend Engineer",
        period: "02/2026 - Present",
        description:
            "Built the backend infrastructure for the Alumni Association portal, including member management, financial ledger tracking, and automated dues collection through Paystack integration.",
        tags: ["Backend", "Payment Gateway Integration", "Production", "API Design"],
    },
    {
        company: "Scalawares",
        role: "Backend Developer",
        period: "08/2025 - Present",
        description:
            "Built core backend infrastructure for an enterprise CRM, including multi-tenant architecture, authentication services, and AI-assisted document processing capabilities.",
        tags: ["Python", "Django", "FastAPI", "OAuth2", "API Design", "AI"],
    },
    {
        company: "Aptech Computer Education",
        role: "Faculty Instructor",
        period: "01/2025 - Present",
        description:
            "Mentored over 50 aspiring developers in Python, backend engineering,guiding them from programming fundamentals to building production-ready applications, translating industry practices into hands-on projects and real-world software solutions.",
        tags: ["Teaching", "Mentorship"],
    },
    {
        company: "Proofly/CerVer",
        role: "Backend Developer",
        period: "09/2025 - 10/2025",
        description:
            "Built the platform's authentication infrastructure, enabling secure user verification workflows through JWT authentication and token lifecycle management.",
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
            "Improved API reliability by developing automated test suites with Pytest and designing well-documented REST APIs using OpenAPI/Swagger standards.",
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
                    next generation of software engineers.
                </p>
            </div>

            <ExperienceClient experiences={experiences} />
        </Section>
    );
}
