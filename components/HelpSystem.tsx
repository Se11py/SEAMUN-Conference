"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface HelpContent {
    id: string;
    title: string;
    body: React.ReactNode;
}

const HELP_CONTENTS: HelpContent[] = [
    {
        id: "site-guide",
        title: "Navigate this site",
        body: (
            <>
                <p>
                    SEAMUN I is a <strong>mid- and high school</strong> conference (grades
                    7–12).
                </p>
                <p>
                    <strong>About</strong> — Our purpose, collaboration, and diplomacy.
                </p>
                <p>
                    <strong>Leadership</strong> — Secretariat &amp; team contacts.
                </p>
                <p>
                    <strong>Committees</strong> — All 10 committees, topics, and country
                    allocations.
                </p>
                <p>
                    <strong>Contact</strong> — Email and &quot;Send a message&quot; for
                    registration or enquiries.
                </p>
                <p>
                    <strong>Register</strong> — Registration page with a short form to
                    express interest; we&apos;ll reply with next steps.
                </p>
            </>
        ),
    },
    {
        id: "mun-basics",
        title: "What is Model UN?",
        body: (
            <>
                <p>
                    Model UN (MUN) is a simulation where students role-play as{" "}
                    <strong>delegates</strong> of countries or characters. They debate real
                    or fictional topics, follow <strong>rules of procedure</strong>, and
                    try to pass <strong>resolutions</strong>. Conferences are run by a{" "}
                    <strong>Secretariat</strong> and <strong>chairs</strong> lead each
                    committee.
                </p>
                <p className="help-popover-title" style={{ marginTop: "1rem" }}>
                    What makes SEAMUN special?
                </p>
                <p>
                    <strong>Digital note passing</strong> — Send and receive notes to
                    fellow delegates online. <strong>Personalized dashboard</strong> —
                    Track your committee, allocations, and schedule in one place.{" "}
                    <strong>100% donation</strong> — All surplus goes to the Thai Red Cross
                    Society. Plus: a student-led, non-profit conference focused on global
                    healthcare and sustainability.
                </p>
            </>
        ),
    },
    {
        id: "delegate",
        title: "Delegate",
        body: (
            <p>
                A participant who represents a country (or character in fantasy
                committees). Delegates speak, negotiate, and write resolutions in
                committee sessions.
            </p>
        ),
    },
    {
        id: "chair",
        title: "Chair",
        body: (
            <p>
                A student who runs a committee: keeps order, recognizes speakers, and
                guides debate. Chairs are not delegates.
            </p>
        ),
    },
    {
        id: "committee",
        title: "Committee",
        body: (
            <p>
                A group that debates one or two topics (e.g. UNHRC, WHO). Each committee
                has chairs and a set number of delegate spots (allocations).
            </p>
        ),
    },
    {
        id: "secretariat",
        title: "Secretariat",
        body: (
            <p>
                The leadership team that organises the conference (e.g. Secretary
                General, Deputy SG, Heads of Finance, PR, Media). They don&apos;t chair
                committees but run the event.
            </p>
        ),
    },
];

export default function HelpSystem() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [position, setPosition] = useState<{
        top: number;
        left: number;
    } | null>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const showHelp = useCallback(
        (helpId: string, anchor: HTMLElement | null) => {
            if (activeId === helpId) {
                setActiveId(null);
                return;
            }
            setActiveId(helpId);
            if (anchor) {
                const rect = anchor.getBoundingClientRect();
                const left = Math.min(rect.left, window.innerWidth - 330);
                let top = rect.bottom + 8;
                if (top + 200 > window.innerHeight) top = rect.top - 8 - 200;
                setPosition({ top, left });
            }
        },
        [activeId]
    );

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const helpBtn = target.closest("[data-help]") as HTMLElement | null;
            if (helpBtn) {
                e.preventDefault();
                const id = helpBtn.getAttribute("data-help")!;
                showHelp(
                    id,
                    helpBtn.classList.contains("help-icon") ? helpBtn : null
                );
                return;
            }
            if (
                popoverRef.current &&
                !popoverRef.current.contains(target) &&
                activeId
            ) {
                setActiveId(null);
            }
        };

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveId(null);
        };

        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [activeId, showHelp]);

    const content = HELP_CONTENTS.find((h) => h.id === activeId);

    return (
        <div
            ref={popoverRef}
            id="help-popover"
            className="help-popover"
            role="tooltip"
            hidden={!activeId}
            style={
                position
                    ? { position: "fixed", top: position.top, left: position.left }
                    : undefined
            }
        >
            {content && (
                <>
                    <p className="help-popover-title">{content.title}</p>
                    {content.body}
                </>
            )}
        </div>
    );
}
