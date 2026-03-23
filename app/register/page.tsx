import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import RegisterContent from "@/components/RegisterContent";

export const metadata: Metadata = { title: "Register — SEAMUN I" };

export default function RegisterPage() {
    return (
        <>
            <Header />
            <main>
                <Suspense
                    fallback={
                        <section className="section">
                            <div className="container" style={{ maxWidth: 560 }}>
                                <p>Loading registration...</p>
                            </div>
                        </section>
                    }
                >
                    <RegisterContent />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
