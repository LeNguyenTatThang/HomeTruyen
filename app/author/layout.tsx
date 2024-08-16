import type { Metadata } from "next"

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
            <nav className="container"> nav author</nav>
            {children}
        </section>
    )
}
