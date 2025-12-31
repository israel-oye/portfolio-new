"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="mb-20">
            <div className="bg-secondary/20 border border-border rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <MessageSquare className="w-8 h-8" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let's Build Something <span className="text-primary">Amazing</span>
                </h2>

                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                    I'm currently available for freelance projects and full-time opportunities.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="gap-2" asChild>
                        <a href="mailto:pelumioyeboade7@gmail.com">
                            <Mail className="w-5 h-5" />
                            Send me an email
                        </a>
                    </Button>

                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <a href="https://wa.me/2347085020543" target="_blank" rel="noopener noreferrer">
                            <Send className="w-5 h-5" />
                            Chat on WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
