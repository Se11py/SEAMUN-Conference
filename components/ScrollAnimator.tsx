"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll-triggered animation controller.
 * Watches elements with `data-animate` attribute and adds
 * the `.is-visible` class when they enter the viewport.
 */
export default function ScrollAnimator() {
    useEffect(() => {
        const targets = document.querySelectorAll("[data-animate]");
        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
