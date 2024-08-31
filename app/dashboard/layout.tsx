import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Navigation from "./components/Navigation"
import "../globals.css"

export const metadata: Metadata = {
  title: "Dashboard Home Truyện",
  description: "Dashboard",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <div className="fixed inset-y-0 left-0 w-[220px] md:w-[280px] border-r bg-muted/40 overflow-y-auto hidden md:block">
            <div className="flex h-full flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <div className="flex items-center gap-2 font-semibold">
                  <div className="h-6 w-6" />
                  <span>Home Truyện</span>
                </div>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Navigation />
                </nav>
              </div>
              <div className="mt-auto p-4">
                <div>
                  <div className="p-2 pt-0 md:p-4 md:pt-0">
                    <Button asChild size="sm" className="w-full">
                      <a href="/">Về Home truyện</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:ml-[280px] ml-0 bg-background">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <div className="w-full flex-1">
              </div>
              <div className="align-middle">
                <DropdownMenu>
                  <DropdownMenuTrigger>Ken</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                    <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="secondary" size="icon" className="rounded-full mx-3">
                  <div className="h-5 w-5" />
                </Button>
              </div>
            </header>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
