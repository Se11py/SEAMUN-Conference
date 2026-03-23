"use client";

import dynamic from "next/dynamic";

export const Header = dynamic(() => import("./Header"), { ssr: false });
export const Footer = dynamic(() => import("./Footer"), { ssr: false });
