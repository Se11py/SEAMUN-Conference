import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SponsorsContent from "@/components/SponsorsContent";

export const metadata: Metadata = { title: "Sponsors — SEAMUN I" };

export default function SponsorsPage() {
    return (
        <>
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section">
                            <div className="container">
                                <p>Loading sponsors...</p>
                            </div>
                        </section>
                    }
                >
                    <SponsorsContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
