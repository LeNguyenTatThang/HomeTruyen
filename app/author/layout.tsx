import type { Metadata } from "next"
import "../globals.css"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Navigation from "./components/Navigation"
export const metadata: Metadata = {
    title: "Author Home Truyện",
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
                <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                    <div className="hidden border-r bg-muted/40 md:block">
                        <div className="flex h-full max-h-screen flex-col gap-2">
                            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                                <div className="flex items-center gap-2 font-semibold">
                                    <div className="h-6 w-6" />
                                    <span className="">Home Truyện</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <nav className="grid items-start px-2 text-sm font-medium lg:px-1">
                                    <Navigation />
                                </nav>
                            </div>
                            <div className="mt-auto p-4">
                                <div x-chunk="dashboard-02-chunk-0">
                                    <div className="p-2 pt-0 md:p-4 md:pt-0">
                                        <Button asChild size="sm" className="w-full">
                                            <a href="/">Về Home truyện</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                            <div className="w-full flex-1">
                                {/* Thêm thông tin */}
                            </div>
                            <div className="align-middle">

                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>Ken</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="mt-3 bg-slate-200 px-12 py-3 gap-5 mr-4">
                                        <DropdownMenuLabel className="my-3">Xin chào Ken Dev</DropdownMenuLabel>
                                        <DropdownMenuItem className="my-3 cursor-pointer">Tài khoản</DropdownMenuItem>
                                        <DropdownMenuItem className="my-3 cursor-pointer">Cài đặt</DropdownMenuItem>
                                        <DropdownMenuItem className="my-3 cursor-pointer">Đăng xuất</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </header>
                        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-orange-50">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    )
}
