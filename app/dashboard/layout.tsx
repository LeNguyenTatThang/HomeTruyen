
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
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
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard Home Truyện",
  description: "Dashboard",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
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
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
            <form>
              <div className="relative">
                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
