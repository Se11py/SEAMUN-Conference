import Link from "next/link";
import NavToggle from "./NavToggle";

interface HeaderProps {
    showHelp?: boolean;
}

export default function Header({ showHelp }: HeaderProps) {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link href="/" className="logo">
                    <img
                        className="logo-image"
                        src="/assets/seamun-logo.png"
                        alt="SEAMUN I"
                    />
                    <span className="logo-text">SEAMUN I</span>
                </Link>
                <nav className="nav">
                    <Link href="/about">About</Link>
                    <Link href="/leadership">Leadership</Link>
                    <Link href="/committees">Committees</Link>
                    <Link href="/#schedule">Schedule</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    {showHelp && (
                        <span className="header-help">
                            <button
                                type="button"
                                className="help-icon"
                                aria-label="Site and MUN help"
                                data-help="site-guide"
                                title="Help"
                            >
                                ?
                            </button>
                        </span>
                    )}
                    <Link className="btn btn-header" href="/register">
                        Register
                    </Link>
                </nav>
                <NavToggle>
                    <Link href="/about">About</Link>
                    <Link href="/leadership">Leadership</Link>
                    <Link href="/committees">Committees</Link>
                    <Link href="/#schedule">Schedule</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    {showHelp && (
                        <button
                            type="button"
                            className="help-trigger"
                            data-help="site-guide"
                        >
                            Help
                        </button>
                    )}
                    <Link href="/register">Register</Link>
                </NavToggle>
            </div>
        </header>
    );
}
