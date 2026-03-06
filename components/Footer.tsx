import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div>
                    <div className="footer-brand">
                        <img className="footer-logo" src="/assets/seamun-logo.png" alt="" />
                        <span className="footer-tagline">SEAMUN I</span>
                    </div>
                    <p className="footer-copy">Policies with a Purpose &middot; &copy; 2027</p>
                </div>
                <nav className="footer-links">
                    <Link href="/about">About</Link>
                    <Link href="/committees">Committees</Link>
                    <Link href="/leadership">Leadership</Link>
                    <Link href="/sponsors">Sponsors</Link>
                </nav>
                <div className="footer-contact">
                    <p>Questions?</p>
                    <a href="mailto:information@seamun.com">information@seamun.com</a>
                </div>
            </div>
        </footer>
    );
}
