import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

import LeadershipContent from "@/components/LeadershipContent";

export const metadata: Metadata = { title: "Leadership — SEAMUN I" };

export default function LeadershipPage() {
    return (
        <>
            <ScrollAnimator />
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section section-alt">
                            <div className="container">
                                <p>Loading leadership...</p>
                            </div>
                        </section>
                    }
                >
                    <LeadershipContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
