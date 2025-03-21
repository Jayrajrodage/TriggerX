import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Define public routes
const publicRoutes = createRouteMatcher([
    "/",
    "/api/clerk-webhook",
    "/api/ping",
    "/api/drive-activity/notification",
    "/api/payment/success",
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "/api/flow",
    "/api/cron/wait",
    "/sign-in(.*)",
    "/sign-up(.*)",
])

export default clerkMiddleware(async (auth, request) => {
    if (!publicRoutes(request)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
}
