import type { Metadata } from "next";
import { Header } from "@/components/ClientShell";
import { Footer } from "@/components/ClientShell";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "About — SEAMUN I (Mid- & High School MUN)",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <AboutContent />
            <Footer />
        </>
    );
}
