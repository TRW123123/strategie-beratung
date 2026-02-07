import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Force Lowercase (Sitemap/Google prefers lowercase)
    if (path !== path.toLowerCase()) {
        url.pathname = path.toLowerCase();
        return Response.redirect(url.toString(), 301);
    }

    // 2. Remove Trailing Slashes (Strict No-Slash Policy)
    // Exception: Root path "/" should not be redirected
    if (path !== "/" && path.endsWith("/")) {
        url.pathname = path.slice(0, -1);
        return Response.redirect(url.toString(), 301);
    }

    // 3. Remove .html Extension (Clean URLs)
    if (path.endsWith(".html")) {
        url.pathname = path.slice(0, -5);
        return Response.redirect(url.toString(), 301);
    }

    // 4. Force Naked Domain (Optional: if user wants www -> non-www)
    // host: 'st-automatisierung.de' vs 'www.st-automatisierung.de'
    /*
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    */

    return context.next();
};

export const config = {
    path: "/*",
    excludedPath: ["/_astro/*", "/images/*", "/favicon.ico", "*.css", "*.js"]
};
