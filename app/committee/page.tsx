"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CommitteeContent from "@/components/CommitteeContent";

export default function CommitteePage() {
    return (
        <>
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section">
                            <div className="container">
                                <p>Loading committee…</p>
                            </div>
                        </section>
                    }
                >
                    <CommitteeContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
