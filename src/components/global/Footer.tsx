import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-secondary/20 py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Israel Oyeboade. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Built with Next.js, Tailwind CSS, and Sanity.io
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/israel-oye"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/israel-oyeboade-b4385723a/"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:pelumioyeboade7@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
