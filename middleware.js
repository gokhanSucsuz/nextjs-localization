import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["tr", "en"];

export function middleware(request) {
	//console.log(request.headers.get("accept-language"));
	const path = request.nextUrl.pathname;
	const pathNameHas = locales.some(
		(locale) => path.startsWith(`/${locale}`) || path.startsWith(`/${locale}`)
	);
	if (pathNameHas) {
		const splittedSegments = path.split("/");
		if (splittedSegments.length === 2) {
			request.nextUrl.pathname = `/${splittedSegments[1]}/home`;
			return NextResponse.redirect(request.nextUrl);
		}
	} else {
		request.nextUrl.pathname = `/${defaultLocale}/home`;
		return NextResponse.redirect(request.nextUrl);
	}
}

export const config = {
	matcher: ["/((?!_next).*)", "/"]
};
