"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import NavItem from "./NavItem"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Colors } from "./Colors"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import Image from "next/image"
import { useRouter } from 'next/navigation'; // Updated import
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
const components: { title: string; href: string }[] = [
  { title: "Theo ngày", href: "/docs/primitives/alert-dialog" },
  { title: "Theo tuần", href: "/docs/primitives/hover-card" },
  { title: "Theo tháng", href: "/docs/primitives/progress" },
  { title: "Theo năm", href: "/docs/primitives/scroll-area" }
];

const category: { title: string; href: string }[] = [
  { title: "Huyền huyễn", href: "/docs/primitives/alert-dialog" },
  { title: "Viễn tưởng", href: "/docs/primitives/hover-card" },
  { title: "Kinh dị", href: "/docs/primitives/progress" },
  { title: "Hài hước", href: "/docs/primitives/scroll-area" }
];

const Nav = ({
  setBgColor,
  setFontFamily,
  setFontSize,
  setLineHeight
}: {
  setBgColor: (value: string) => void
  setFontFamily: (value: string) => void
  setFontSize: (value: string) => void
  setLineHeight: (value: string) => void
}) => {
  const [searchTerm, setSearchTerm] = React.useState("")
  const { data: session } = useSession()
  const [user, setUser] = React.useState<{ name: string; avatar: string } | null>(null)

  const router = useRouter()
  React.useEffect(() => {
    if (session) {
      setUser({
        name: session?.user?.name!,
        avatar: session?.user?.avatar!
      })
    }
  }
    , [session])
  const handleLogout = async () => {
    if (session) {
      signOut()
    } else {
      await fetch('/api/auth/logout', {
        method: "POST",
        credentials: 'include'
      })
    }
  }


  return (
    <div className="bg-slate-200">
      <div className="container flex md:flex-row justify-between">
        <div className="flex items-center p-4">
          <div className="text-lg font-semibold">Home Truyện</div>
        </div>
        <Button className="text-white cursor-pointer md:hidden mt-2">Menu</Button>
        <div className="md:flex-row items-center p-4 w-full md:w-auto hidden md:flex">
          <div className="flex items-center">
            <div className="pr-4">
              <Colors setBgColor={setBgColor} setFontFamily={setFontFamily} setFontSize={setFontSize} setLineHeight={setLineHeight} />
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2 md:space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Thể loại</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      {category.map((cate) => (
                        <NavItem key={cate.title} title={cate.title} href={cate.href} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Bảng xếp hạng</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      {components.map((component) => (
                        <NavItem key={component.title} title={component.title} href={component.href} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Input
            type="text"
            className="w-full md:w-64 rounded-md border border-gray-300 p-2 mt-2 ml-2 md:mt-0"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="pt-1">
            {user?.name ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-slate-200 text-black hover:bg-slate-200 ml-2">
                    <Image
                      src={user.avatar}
                      alt="User Image"
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                    <div className="flex mx-2 items-center">
                      <p className="ml-2">Xin chào, {user.name}!</p>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 gap-5">
                  <Button className="my-1 bg-white text-black hover:bg-slate-500 w-full">Xem thông tin</Button>
                  <Button className="my-1 bg-white text-black hover:bg-slate-500 w-full">Đăng truyện</Button>
                  <Button
                    onClick={handleLogout}
                    className="my-1 text-black bg-white hover:bg-slate-500 w-full">
                    Đăng xuất
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <Link href='/dang-nhap'>
                <Button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ml-2 mt-2 md:mt-0">
                  Đăng nhập
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav
