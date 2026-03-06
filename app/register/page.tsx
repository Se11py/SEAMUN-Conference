"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MailtoForm from "@/components/MailtoForm";

export default function RegisterPage() {
    return (
        <>
            <Header />
            <main>
                <section className="section">
                    <div className="container" style={{ maxWidth: 560 }}>
                        <h2 className="section-title">Register for SEAMUN I</h2>
                        <p className="section-desc">
                            Express your interest. We&apos;ll contact you with registration
                            details and next steps.
                        </p>
                        <p style={{ marginBottom: "1.5rem" }}>
                            <a
                                href="https://forms.gle/iy57uXzA89d3WVYy8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: "inline-block" }}
                            >
                                Expression of Interest (Google Form)
                            </a>
                        </p>
                        <p className="section-desc">
                            Or email us directly with the form below:
                        </p>
                        <MailtoForm
                            mailto="information@seamun.com"
                            subject="SEAMUN I 2027 – Registration interest"
                            fields={["name", "email", "role", "school", "message"]}
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
