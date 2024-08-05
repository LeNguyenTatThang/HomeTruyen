import type { Metadata } from "next"

import "../globals.css"


export const metadata: Metadata = {
    title: "Author Home Truyen",
    description: "Author",
};

export default function AuthorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <nav> nav author</nav>
            {children}
        </section>
    )
}
