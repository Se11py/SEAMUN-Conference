"use client";

import { useState } from "react";

export default function NavToggle({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="nav-toggle"
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
            />
            <div className="nav-dropdown" id="nav-dropdown" hidden={!open}>
                {children}
            </div>
        </>
    );
}
