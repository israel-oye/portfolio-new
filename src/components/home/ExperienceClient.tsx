"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
}

interface ExperienceClientProps {
    experiences: ExperienceItem[];
}

export default function ExperienceClient({ experiences }: ExperienceClientProps) {
    return (
        <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 ring-4 ring-background z-10" />

                        <div className="flex-1 ml-8 md:ml-0">
                            <div className="bg-secondary/30 border border-border p-6 rounded-xl hover:border-primary/30 transition-colors">
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <h3 className="font-bold text-xl text-foreground">
                                            {exp.role}
                                        </h3>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Briefcase className="w-4 h-4" />
                                        <span className="font-medium">{exp.company}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-background border border-border px-2 py-1 rounded-full text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Empty space for the other side of the timeline */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
