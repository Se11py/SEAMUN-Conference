import type { Metadata } from "next";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = { title: "Sponsors — SEAMUN I" };

export default function SponsorsPage() {
    return <SponsorsClient />;
}
