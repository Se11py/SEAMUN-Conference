import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = { title: "Leadership — SEAMUN I" };

const TEAM = [
    { role: "Secretary General", name: "Jules K.A.", email: "juleskittoastrop@gmail.com", photo: "/assets/Jules.png" },
    { role: "Deputy Secretary General", name: "Emily H.", email: "emily.yhstudent@sisbschool.com", photo: "/assets/Emily.png" },
    { role: "Parliamentarian & Head of Logistics", name: "Lotus T.", email: "ladapham14@gmail.com", photo: "/assets/Lotus.png" },
    { role: "Head of Delegate Affairs", name: "Dominic S. S.", email: "dominicstott09@gmail.com", photo: "/assets/Dominic.png" },
    { role: "Deputy Head of Finance", name: "Mannan P.", email: "mannanparikh27@gmail.com", photo: "/assets/Mannan.png" },
    { role: "Head of PR & Advertising", name: "Phil", email: "sarana79262@gmail.com", photo: "/assets/Phil.png" },
    { role: "Head of Media", name: "Ping J.", email: "30bping@regents.ac.th", photo: "/assets/Ping.png" },
];

export default function LeadershipPage() {
    return (
        <>
            <ScrollAnimator />
            <Header />
            <main>
                <section className="section section-alt">
                    <div className="container">
                        <h2 className="section-title" data-animate>Secretariat &amp; Leadership</h2>
                        <p className="section-desc" data-animate>
                            Meet the dedicated team behind SEAMUN I, working to bring you an unforgettable conference experience.
                        </p>
                        <div className="leadership-page-grid" data-animate-stagger>
                            {TEAM.map((p, i) => (
                                <div key={i} className="leadership-page-card" data-animate>
                                    <div className="leadership-page-photo-wrap">
                                        {p.photo ? (
                                            <img src={p.photo} alt={p.name} className="leadership-page-photo" />
                                        ) : (
                                            <div className="leadership-page-initials">
                                                {p.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="leadership-page-info">
                                        <h3 className="leadership-page-name">{p.name}</h3>
                                        <p className="leadership-page-role">{p.role}</p>
                                        {p.email && (
                                            <a href={`mailto:${p.email}`} className="leadership-page-email">
                                                {p.email}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
