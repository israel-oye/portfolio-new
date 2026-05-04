import { sanityFetch } from "@/sanity/lib/fetch";
import { TECH_STACK_QUERY } from "@/sanity/lib/queries";
import Section from "@/components/ui/Section";
import { Code2, Database, Layout, Terminal, Cpu } from "lucide-react";
import Image from "next/image";

// Fallback data
const fallbackTechnologies = [
    {
        category: "Languages",
        icon: <Code2 className="w-6 h-6" />,
        items: [
            { name: "Python", icon: null },
            { name: "JavaScript", icon: null },
            { name: "Dart", icon: null },
            { name: "TypeScript", icon: null }
        ],
    },
    {
        category: "Frameworks",
        icon: <Layout className="w-6 h-6" />,
        items: [
            { name: "Django REST", icon: null },
            { name: "FastAPI", icon: null },
            { name: "Flask", icon: null },
            { name: "Next.js", icon: null },
            { name: "Flutter", icon: null }
        ],
    },
    {
        category: "Databases",
        icon: <Database className="w-6 h-6" />,
        items: [
            { name: "PostgreSQL", icon: null },
            { name: "MongoDB", icon: null },
            { name: "Redis", icon: null }
        ],
    },
    {
        category: "Tools & DevOps",
        icon: <Terminal className="w-6 h-6" />,
        items: [
            { name: "Docker", icon: null },
            { name: "Git", icon: null },
            { name: "AWS", icon: null },
            { name: "Backblaze B2", icon: null },
            { name: "Swagger", icon: null }
        ],
    },
];

export default async function TechStack() {
    let displayData = fallbackTechnologies;

    try {
        const data = await sanityFetch({ query: TECH_STACK_QUERY });
        if (data && data.length > 0) {
            // Group data by category if available
            const groupedData = data.reduce((acc: any, item: any) => {
                if (!acc[item.category]) {
                    acc[item.category] = {
                        category: item.category,
                        items: [],
                        icon: null
                    };
                }
                // Push object with name and icon instead of just string
                acc[item.category].items.push({
                    name: item.name,
                    icon: item.icon // Assuming icon is available in the query result
                });
                return acc;
            }, {});
            displayData = Object.values(groupedData);
        }
    } catch (error) {
        console.error("Failed to fetch tech stack:", error);
    }

    // Helper to get category icon
    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'language': return <Code2 className="w-6 h-6" />;
            case 'framework': return <Layout className="w-6 h-6" />;
            case 'database': return <Database className="w-6 h-6" />;
            default: return <Terminal className="w-6 h-6" />;
        }
    };

    return (
        <Section id="tech-stack" className="bg-secondary/10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Technical <span className="text-primary">Arsenal</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I leverage a robust stack of modern technologies to build scalable,
                    secure, and high-performance applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayData.map((tech: any, index: number) => (
                    <div
                        key={tech.category}
                        className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {getCategoryIcon(tech.category)}
                            </div>
                            <h3 className="font-bold text-lg capitalize">{tech.category}</h3>
                        </div>
                        <ul className="space-y-3">
                            {tech.items.map((item: any) => (
                                <li
                                    key={item.name}
                                    className="text-muted-foreground flex items-center gap-3 group/item hover:text-foreground transition-colors"
                                >
                                    <div className="p-1.5 bg-secondary rounded-md text-primary/70 group-hover/item:text-primary group-hover/item:bg-primary/10 transition-colors relative w-7 h-7 flex items-center justify-center overflow-hidden">
                                        {item.icon ? (
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-1"
                                                style={{ filter: 'invert(0.85)' }}
                                            />
                                        ) : (
                                            <Cpu className="w-4 h-4" />
                                        )}
                                    </div>
                                    <span className="font-medium">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
