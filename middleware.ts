export { default } from "next-auth/middleware";

// Apply auth to ALL pages except Next.js assets and API routes.
// Adjust this list if you only want to protect specific sections (e.g., '/dashboard/:path*').
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
