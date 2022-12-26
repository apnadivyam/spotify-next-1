import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const token = await getToken({ req, secret: process.env.JWT_SECRET });

	const { pathname } = req.nextUrl;
	const url = req.nextUrl.clone();
	url.pathname = "/login";

	if (pathname.startsWith("/api/auth") || pathname.startsWith("/_next") || pathname === "/favicon.ico") {
		return NextResponse.next();
	}
	if (!token && pathname !== "/login") {
		// console.log(pathname);
		return NextResponse.redirect(url);
	}
}
