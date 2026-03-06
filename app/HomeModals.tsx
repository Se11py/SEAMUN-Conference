"use client";

import Modal from "@/components/Modal";
import MailtoForm from "@/components/MailtoForm";

export default function HomeModals() {
    return (
        <>
            <Modal
                id="register-modal"
                title="Register for SEAMUN I"
                dialogClassName="modal-dialog-lg"
            >
                <div className="modal-form-wrap">
                    <p className="modal-form-intro">
                        Express your interest. We&apos;ll get back to you with registration
                        details.
                    </p>
                    <MailtoForm
                        mailto="information@seamun.com"
                        subject="SEAMUN I 2027 – Registration interest"
                        fields={["name", "email", "role", "school", "message"]}
                    />
                </div>
            </Modal>

            <Modal id="contact-modal" title="Send a message">
                <MailtoForm
                    mailto="information@seamun.com"
                    subject="SEAMUN I 2027 – Website contact"
                    fields={["name", "email", "message"]}
                />
            </Modal>
        </>
    );
}
