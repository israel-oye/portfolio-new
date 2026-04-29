"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
    return (
        <Section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <svg
                    className="h-full w-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="grid-pattern"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-primary"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            <div className="max-w-4xl flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-mono text-sm md:text-base tracking-wider mb-4 block">
                            Hi, my name is
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            Israel Oyebọade.
                            <br />
                            <span className="text-muted-foreground">
                                I build scalable backends.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                    >
                        I'm a Software Engineer specializing in{" "}
                        <span className="text-foreground font-medium">Python</span>,{" "}
                        <span className="text-foreground font-medium">API Development</span>,
                        and <span className="text-foreground font-medium">Flutter</span>. I
                        architect multi-tenant systems and build interactive web experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" asChild>
                            <Link href="#projects">
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#contact">
                                Contact Me <Mail className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
                    <div className="relative w-full h-full rounded-full border-4 border-background shadow-xl overflow-hidden bg-muted">
                        {/* Profile Image */}
                        <img
                            src="/profile-4.jpg"
                            alt="Israel Oyeboade"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
