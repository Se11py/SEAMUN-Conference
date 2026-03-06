import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Redirect /page.html → /page (301)
    if (pathname.endsWith(".html")) {
        const clean =
            pathname === "/index.html" ? "/" : pathname.replace(/\.html$/, "");
        const url = request.nextUrl.clone();
        url.pathname = clean;
        return NextResponse.redirect(url, 301);
    }
}

export const config = {
    matcher: ["/((?!api|_next|assets|favicon).*)"],
};
