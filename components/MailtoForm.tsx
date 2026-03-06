"use client";

import { FormEvent, useCallback } from "react";

interface MailtoFormProps {
    mailto: string;
    subject: string;
    fields: ("name" | "email" | "role" | "school" | "message")[];
    onSuccess?: () => void;
}

function buildMailto(to: string, subject: string, bodyLines: string[]) {
    const params = [
        "subject=" + encodeURIComponent(subject),
        "body=" + encodeURIComponent(bodyLines.join("\n")),
    ];
    return "mailto:" + encodeURIComponent(to) + "?" + params.join("&");
}

export default function MailtoForm({
    mailto,
    subject,
    fields,
    onSuccess,
}: MailtoFormProps) {
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = (data.get("name") as string) || "";
            const email = (data.get("email") as string) || "";
            const role = (data.get("role") as string) || "";
            const school = (data.get("school") as string) || "";
            const message = (data.get("message") as string) || "";

            const body = ["Name: " + name, "Email: " + email]
                .concat(role ? ["Role: " + role] : [])
                .concat(school ? ["School/Organisation: " + school] : [])
                .concat(message ? ["Message: " + message] : []);

            window.location.href = buildMailto(mailto, subject, body);
            onSuccess?.();
        },
        [mailto, subject, onSuccess]
    );

    return (
        <form className="modal-form" onSubmit={handleSubmit}>
            {fields.includes("name") && (
                <label>
                    <span>Name</span>
                    <input type="text" name="name" required placeholder="Your name" />
                </label>
            )}
            {fields.includes("email") && (
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                    />
                </label>
            )}
            {fields.includes("role") && (
                <label>
                    <span>Role</span>
                    <select name="role">
                        <option value="">Select…</option>
                        <option value="Delegate">Delegate</option>
                        <option value="Chair">Chair</option>
                        <option value="Advisor">Advisor</option>
                    </select>
                </label>
            )}
            {fields.includes("school") && (
                <label>
                    <span>School or organisation (optional)</span>
                    <input type="text" name="school" placeholder="School name" />
                </label>
            )}
            {fields.includes("message") && (
                <label>
                    <span>Message{fields.includes("role") ? " (optional)" : ""}</span>
                    <textarea
                        name="message"
                        rows={fields.includes("role") ? 3 : 4}
                        required={!fields.includes("role")}
                        placeholder={
                            fields.includes("role")
                                ? "Any questions or notes…"
                                : "Your message…"
                        }
                    />
                </label>
            )}
            <div className="modal-form-actions">
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </div>
        </form>
    );
}
