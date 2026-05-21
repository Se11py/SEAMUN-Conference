"use client";

import { useState, useEffect, useCallback } from "react";

interface TeamMember {
    role: string;
    name: string;
    email: string;
    photo?: string;
}

const TEAM: TeamMember[] = [
    { role: "Secretary General", name: "Jules K.A.", email: "juleskittoastrop@gmail.com", photo: "/assets/Jules.png" },
    { role: "Deputy Secretary General", name: "Emily H.", email: "emily.yhstudent@sisbschool.com", photo: "/assets/Emily.png" },
    { role: "Parliamentarian", name: "Sam", email: "", photo: "/assets/Sam.png" },
    { role: "Head of Logistics", name: "Moonum", email: "", photo: "/assets/Moonum.png" },
    { role: "Head of Delegate Affairs", name: "Dominic S. S.", email: "dominicstott09@gmail.com", photo: "/assets/Dominic.png" },
    { role: "Deputy Head of Finance", name: "Mannan P.", email: "mannanparikh27@gmail.com", photo: "/assets/Mannan.png" },
    { role: "Head of PR & Advertising", name: "Phil", email: "sarana79262@gmail.com", photo: "/assets/Phil.png" },
    { role: "Head of Media", name: "Joanna", email: "", photo: "/assets/Joanna.png" },
    { role: "Head of Committee Outreach", name: "Myesha", email: "", photo: "/assets/myesha.png" },
];

export default function LeadershipCarousel() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % TEAM.length);
    }, []);

    const prev = useCallback(() => {
        setActive((prev) => (prev - 1 + TEAM.length) % TEAM.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    const person = TEAM[active];

    return (
        <div
            className="lc-wrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main card */}
            <div className="lc-stage">
                <button className="lc-arrow lc-arrow-prev" onClick={prev} aria-label="Previous">‹</button>

                <div className="lc-card" key={active}>
                    <div className="lc-photo-side">
                        {person.photo ? (
                            <img src={person.photo} alt={person.name} className="lc-photo" />
                        ) : (
                            <div className="lc-initials">
                                {person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                            </div>
                        )}
                    </div>
                    <div className="lc-text-side">
                        <span className="lc-counter">{active + 1} / {TEAM.length}</span>
                        <span className="lc-role">{person.role}</span>
                        <span className="lc-name">{person.name}</span>
                        {person.email && (
                            <a className="lc-email" href={`mailto:${person.email}`}>{person.email}</a>
                        )}
                    </div>
                </div>

                <button className="lc-arrow lc-arrow-next" onClick={next} aria-label="Next">›</button>
            </div>

            {/* Thumbnails */}
            <div className="lc-thumbs">
                {TEAM.map((m, i) => (
                    <button
                        key={i}
                        className={`lc-thumb${i === active ? " active" : ""}`}
                        onClick={() => setActive(i)}
                        aria-label={m.name}
                    >
                        {m.photo ? (
                            <img src={m.photo} alt="" className="lc-thumb-img" />
                        ) : (
                            <span className="lc-thumb-initials">{m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
