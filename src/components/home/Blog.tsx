"use client";

import Section from "@/components/ui/Section";
import { BookOpen } from "lucide-react";

export default function Blog() {
    return (
        <Section id="blog" className="mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Latest <span className="text-primary">Articles</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights on backend development and software architecture.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center py-12 bg-secondary/10 rounded-2xl border border-dashed border-border">
                <div className="p-4 bg-background rounded-full mb-4">
                    <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon...</h3>
                <p className="text-muted-foreground text-center max-w-md">
                    I'm currently writing some exciting content. Check back later for updates!
                </p>
            </div>
        </Section>
    );
}
