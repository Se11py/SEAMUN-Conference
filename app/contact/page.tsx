import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = { title: "Contact — SEAMUN I" };

export default function ContactPage() {
    return (
        <>
            <ScrollAnimator />
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section contact-section">
                            <div className="container">
                                <p>Loading contact form...</p>
                            </div>
                        </section>
                    }
                >
                    <ContactContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
