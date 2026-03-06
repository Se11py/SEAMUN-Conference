"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ModalProps {
    id: string;
    title: string;
    children: React.ReactNode;
    dialogClassName?: string;
}

export default function Modal({
    id,
    title,
    children,
    dialogClassName,
}: ModalProps) {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);

    const openModal = useCallback(() => {
        setOpen(true);
        document.body.classList.add("modal-open");
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);
        document.body.classList.remove("modal-open");
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const trigger = target.closest(`[data-open="${id}"]`);
            if (trigger) {
                e.preventDefault();
                openModal();
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [id, openModal]);

    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, closeModal]);

    useEffect(() => {
        if (open && dialogRef.current) {
            const first = dialogRef.current.querySelector<HTMLElement>(
                "input:not([type=hidden]), select, textarea, button"
            );
            first?.focus();
        }
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="modal"
            id={id}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-title`}
        >
            <div className="modal-backdrop" onClick={closeModal} />
            <div
                ref={dialogRef}
                className={`modal-dialog ${dialogClassName || ""}`}
            >
                <button
                    type="button"
                    className="modal-close"
                    aria-label="Close"
                    onClick={closeModal}
                >
                    ×
                </button>
                <h2 className="modal-title" id={`${id}-title`}>
                    {title}
                </h2>
                {children}
            </div>
        </div>
    );
}
