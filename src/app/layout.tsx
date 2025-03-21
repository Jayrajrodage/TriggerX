import { Toaster } from "@/components/ui/sonner"
import { BillingProvider } from "@/providers/billing-provider"
import ModalProvider from "@/providers/modal-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
})

export const metadata: Metadata = {
    title: "TriggerX",
    description: "TriggerX, workflow automation platform",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dmSans.variable} antialiased`}>
                <ClerkProvider
                    publishableKey={
                        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
                    }
                >
                    <BillingProvider>
                        <ModalProvider>
                            <ThemeProvider
                                attribute="class"
                                defaultTheme="system"
                                enableSystem
                                disableTransitionOnChange
                            >
                                {children}
                                <Toaster />
                            </ThemeProvider>
                        </ModalProvider>
                    </BillingProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}
