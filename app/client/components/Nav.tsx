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
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Theo ngày",
    href: "/docs/primitives/alert-dialog",
    description:
      "Bảng xếp hạng được sắp xếp theo lượt xem nhiều trong ngày.",
  },
  {
    title: "Theo tuần",
    href: "/docs/primitives/hover-card",
    description:
      "Bảng xếp hạng được sắp xếp theo lượt xem nhiều trong tuần.",
  },
  {
    title: "Theo tháng",
    href: "/docs/primitives/progress",
    description:
      "Bảng xếp hạng được sắp xếp theo lượt xem nhiều trong tháng.",
  },
  {
    title: "Theo năm",
    href: "/docs/primitives/scroll-area",
    description: "Bảng xếp hạng được sắp xếp theo lượt xem nhiều trong năm.",
  }
]
const category: { title: string; href: string }[] = [
  {
    title: "Huyền huyễn",
    href: "/docs/primitives/alert-dialog"

  },
  {
    title: "Viễn tưởng",
    href: "/docs/primitives/hover-card"

  },
  {
    title: "Kinh dị",
    href: "/docs/primitives/progress"
  },
  {
    title: "Hài hước",
    href: "/docs/primitives/scroll-area"
  }
]


const Nav = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  return (
    <div className="bg-slate-200">
      <div className="container flex  md:flex-row justify-between ">
        <div className="flex items-center p-4">
          <div className="text-lg font-semibold">
            Home Truyện
          </div>

        </div>
        <Button className="text-white cursor-pointer md:hidden mt-2">Menu</Button>
        <div className="flex md:flex-row items-center p-4 w-full md:w-auto hidden md:flex">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2 md:space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Thể loại</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {category.map((cate) => (
                        <NavItem
                          key={cate.title}
                          title={cate.title}
                          href={cate.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Bảng xếp hạng</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {components.map((component) => (
                        <NavItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </NavItem>
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
          <Button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ml-2 mt-2 md:mt-0">
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Nav