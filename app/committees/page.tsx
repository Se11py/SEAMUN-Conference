"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

import CommitteesContent from "@/components/CommitteesContent";

export default function CommitteesPage() {
    return (
        <>
            <ScrollAnimator />
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section">
                            <div className="container">
                                <p>Loading committees…</p>
                            </div>
                        </section>
                    }
                >
                    <CommitteesContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
