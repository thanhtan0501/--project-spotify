import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/Footer";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spotify",
    description: "Listen to music!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <div className="relative flex flex-col min-h-screen h-full p-2 gap-2">
                    <Header />
                    <Sidebar>{children}</Sidebar>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
