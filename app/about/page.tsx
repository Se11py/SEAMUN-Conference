import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About — SEAMUN I (Mid- & High School MUN)",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">About</h2>
                        <p className="section-desc">
                            SEAMUN I is a <strong>mid- and high school</strong> conference for
                            students in grades 7–12.
                        </p>
                        <div className="about-grid">
                            <div className="about-card">
                                <h3>What is Model UN?</h3>
                                <p>
                                    Model UN (MUN) is a simulation where students role-play as
                                    delegates of countries or characters. They debate real or
                                    fictional topics, follow rules of procedure, and try to pass
                                    resolutions. A Secretariat runs the conference; chairs lead
                                    each committee.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>What makes SEAMUN special?</h3>
                                <p>
                                    <strong>Digital note passing</strong> — Send and receive notes
                                    to fellow delegates online.{" "}
                                    <strong>Personalized dashboard</strong> — Track your
                                    committee, allocations, and schedule in one place.{" "}
                                    <strong>100% donation</strong> — All surplus goes to the Thai
                                    Red Cross Society. Student-led, non-profit, focused on global
                                    healthcare and sustainability.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>Purpose</h3>
                                <p>
                                    100% of conference surplus is donated to the Thai Red Cross
                                    Society. We connect global policy debate with local impact.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>Collaboration</h3>
                                <p>
                                    Delegates, chairs, and advisors work across 10
                                    committees—resolution-writing, caucusing, and committee
                                    activities.
                                </p>
                            </div>
                            <div className="about-card">
                                <h3>Diplomacy</h3>
                                <p>
                                    Rules of procedure, moderated debate, and formal diplomacy. We
                                    train the next generation in negotiation and public speaking.
                                </p>
                            </div>
                        </div>
                        <hr className="section-divider" />
                        <div className="meta-row">
                            <span>
                                <strong>Audience:</strong> Mid- and high school (grades 7–12)
                            </span>
                            <span>
                                <strong>Location:</strong> Venue TBD (Bangkok)
                            </span>
                            <span>
                                <strong>Fees:</strong> 2,500 THB (school) / 3,000 THB
                                (independent). Chair: 800 THB.
                            </span>
                            <span>
                                <strong>Capacity:</strong> 250
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
