import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "./components/navigation/NavBar"
import { AccountContext } from "./context/account"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "NFT Token Gating",
    description: "Next.js NFT Token Gating app",
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AccountContext>
                    <NavBar />
                    {children}
                </AccountContext>
            </body>
        </html>
    )
}
