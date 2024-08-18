import type { Metadata } from "next"
import "../globals.css"
export const metadata: Metadata = {
    title: "Author Home Truyen",
    description: "Author"
}

export default function AuthorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <nav className="container"> nav author</nav>
                {children}
            </body>
        </html>
    )
}
