import { sanityFetch } from "@/sanity/lib/fetch";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Clock, User, Layers, Code2, Palette, Zap, AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await sanityFetch({
        query: PROJECT_BY_SLUG_QUERY,
        params: { slug },
    });

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Israel Oyeboade`,
        description: project.description ?? undefined,
        openGraph: {
            title: project.title ?? undefined,
            description: project.description ?? undefined,
            images: project.imageUrl ? [{ url: project.imageUrl }] : [],
        },
    };
}

// ─── PortableText Components ──────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-8 mb-3 text-primary">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-5 italic my-6 text-muted-foreground bg-primary/5 py-3 pr-4 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="space-y-2 mb-5 ml-1">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="space-y-2 mb-5 ml-1 list-decimal list-inside">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="flex items-start gap-2 text-muted-foreground">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{children}</span>
            </li>
        ),
        number: ({ children }) => (
            <li className="text-muted-foreground">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
        ),
        code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-secondary/60 font-mono text-sm text-primary border border-border/50">
                {children}
            </code>
        ),
        link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                    {children}
                </a>
            );
        },
    },
};

// ─── Section Config ───────────────────────────────────────────────────────────

const sections = [
    { key: "overview", label: "Overview", icon: Layers, id: "section-overview" },
    { key: "designChoices", label: "Design Choices", icon: Palette, id: "section-design" },
    { key: "engineeringApproach", label: "Engineering Approach", icon: Code2, id: "section-engineering" },
    { key: "challenges", label: "Challenges & Solutions", icon: AlertTriangle, id: "section-challenges" },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await sanityFetch({
        query: PROJECT_BY_SLUG_QUERY,
        params: { slug },
    });

    if (!project) return notFound();

    const activeSections = sections.filter(
        (s) => project.details?.[s.key] && project.details[s.key]!.length > 0
    );

    return (
        <div className="min-h-screen bg-background">
            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <div className="relative w-full h-[55vh] min-h-[380px] max-h-[600px] overflow-hidden">
                {/* Background image / fallback */}
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title ?? "Project image"}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
                )}

                {/* Layered gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

                {/* Hero content */}
                <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-10 max-w-7xl mx-auto">
                    {/* Back link */}
                    <Link
                        href="/#projects"
                        className="absolute top-8 left-6 md:left-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                            {project.title}
                        </h1>

                        {/* Meta badges */}
                        <div className="flex flex-wrap gap-3">
                            {project.details?.role && (
                                <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-border/60 text-sm px-4 py-1.5 rounded-full">
                                    <User className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-muted-foreground">{project.details.role}</span>
                                </div>
                            )}
                            {project.details?.duration && (
                                <div className="flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-border/60 text-sm px-4 py-1.5 rounded-full">
                                    <Clock className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-muted-foreground">{project.details.duration}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Body ─────────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16">

                    {/* ── Main Content ─────────────────────────────────── */}
                    <div className="min-w-0">
                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary/40 pl-5">
                            {project.description}
                        </p>

                        {/* Project Images Gallery */}
                        {project.projectImages && project.projectImages.length > 0 && (
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                                        <Layers className="w-4 h-4 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">Diagrams & Screenshots</h2>
                                </div>
                                <div className="pl-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {project.projectImages.map((img: { url: string; caption?: string | null; alt?: string | null }, i: number) => (
                                        <a
                                            key={i}
                                            href={img.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block rounded-xl overflow-hidden border border-border/60 bg-secondary/20 hover:border-primary/40 transition-colors"
                                        >
                                            <div className="relative w-full aspect-video overflow-hidden">
                                                <Image
                                                    src={img.url}
                                                    alt={img.alt ?? img.caption ?? `Project image ${i + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            {img.caption && (
                                                <p className="px-4 py-2.5 text-sm text-muted-foreground border-t border-border/40 font-mono">
                                                    {img.caption}
                                                </p>
                                            )}
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-10 ml-12 h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
                            </div>
                        )}

                        {/* Detail sections */}
                        {activeSections.length > 0 ? (
                            <div className="space-y-16">
                                {activeSections.map(({ key, label, icon: Icon, id }) => (
                                    <section key={key} id={id} className="scroll-mt-28">
                                        {/* Section heading */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-foreground">{label}</h2>
                                        </div>
                                        <div className="pl-12">
                                            <PortableText
                                                value={project.details![key]!}
                                                components={ptComponents}
                                            />
                                        </div>
                                        {/* Divider */}
                                        <div className="mt-12 h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-2xl">
                                <Zap className="w-10 h-10 text-muted-foreground/30 mb-4" />
                                <p className="text-muted-foreground">Project details coming soon.</p>
                            </div>
                        )}
                    </div>

                    {/* ── Sidebar ──────────────────────────────────────── */}
                    <aside className="mt-12 lg:mt-0">
                        <div className="lg:sticky lg:top-28 space-y-6">

                            {/* Links card */}
                            <div className="bg-secondary/20 border border-border/60 rounded-2xl p-6">
                                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                                    Links
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {project.link && (
                                        <Button asChild className="w-full justify-center gap-2">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubLink && (
                                        <Button asChild variant="outline" className="w-full justify-center gap-2">
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4" />
                                                Source Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* Tech stack card */}
                            {project.technologies && project.technologies.length > 0 && (
                                <div className="bg-secondary/20 border border-border/60 rounded-2xl p-6">
                                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech: { name: string; icon?: string }) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 bg-background/50 border border-border/60 rounded-lg px-3 py-1.5 hover:border-primary/40 transition-colors"
                                            >
                                                {tech.icon ? (
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        width={16}
                                                        height={16}
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    <div className="w-4 h-4 rounded-sm bg-primary/20 flex-shrink-0" />
                                                )}
                                                <span className="text-xs font-mono text-muted-foreground">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Table of contents card */}
                            {activeSections.length > 1 && (
                                <div className="bg-secondary/20 border border-border/60 rounded-2xl p-6">
                                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                                        On this page
                                    </h3>
                                    <nav className="space-y-1">
                                        {activeSections.map(({ label, icon: Icon, id }) => (
                                            <a
                                                key={id}
                                                href={`#${id}`}
                                                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors group"
                                            >
                                                <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                                                {label}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
