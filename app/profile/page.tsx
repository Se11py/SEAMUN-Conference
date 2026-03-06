"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProfilePage() {
    const [status, setStatus] = useState("Not signed in.");

    useEffect(() => {
        setStatus("Firebase authentication is not configured in this Next.js build. Please visit the original profile page for account features.");
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">👤 Profile</h2>
                        <p className="section-desc">
                            View your signed-in account details.
                        </p>
                        <div style={{
                            padding: "1.5rem",
                            background: "var(--bg-alt)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            maxWidth: 480,
                        }}>
                            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
                                {status}
                            </p>
                            <div style={{
                                display: "grid",
                                gap: "0.75rem",
                            }}>
                                {[
                                    { label: "First name", id: "profile-first-name" },
                                    { label: "Pronouns", id: "profile-pronouns" },
                                    { label: "School", id: "profile-school" },
                                    { label: "Email", id: "profile-email" },
                                    { label: "User ID", id: "profile-uid" },
                                    { label: "Points", id: "profile-points" },
                                ].map((field) => (
                                    <div key={field.id}>
                                        <span style={{
                                            display: "block",
                                            fontSize: "0.8rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            color: "var(--text-muted)",
                                        }}>
                                            {field.label}
                                        </span>
                                        <span style={{ fontWeight: 600 }}>-</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
