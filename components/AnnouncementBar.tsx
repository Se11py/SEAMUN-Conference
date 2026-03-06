"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem("seamun-announcement-dismissed");
        if (!dismissed) setVisible(true);
    }, []);

    const dismiss = () => {
        setVisible(false);
        try {
            localStorage.setItem("seamun-announcement-dismissed", "1");
        } catch { }
    };

    if (!visible) return null;

    return (
        <div className="announcement" role="banner">
            <div className="container announcement-inner">
                <p className="announcement-text">
                    <strong>SEAMUN I 2027</strong> — Mid- &amp; high school MUN. January
                    23–24, Bangkok.{" "}
                    <a
                        href="https://forms.gle/iy57uXzA89d3WVYy8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="announcement-cta"
                    >
                        Expression of Interest
                    </a>
                </p>
                <button
                    type="button"
                    className="announcement-close"
                    aria-label="Dismiss"
                    onClick={dismiss}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
