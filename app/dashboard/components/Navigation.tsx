"use client";
import React, { useState } from "react"
import NavItem from "./NavItem"

const Navigation = () => {
    const [activeItem, setActiveItem] = useState<string | null>("dashboard")

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavItem
                label="Dashboard"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "dashboard"}
                onClick={() => handleItemClick("dashboard")}
                href="/dashboard"
            />
            <NavItem
                label="Thông báo"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "thong-bao"}
                onClick={() => handleItemClick("thong-bao")}
                href="/dashboard"
            >
                <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</div>
            </NavItem>
            <NavItem
                label="Truyện"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "truyen"}
                onClick={() => handleItemClick("truyen")}
                href="/dashboard"
            />
            <NavItem
                label="Thể loại"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "the-loai"}
                onClick={() => handleItemClick("the-loai")}
                href="/dashboard/the-loai"
            />
            <NavItem
                label="Tác giả"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "tac-gia"}
                onClick={() => handleItemClick("tac-gia")}
                href="/dashboard"
            />
            <NavItem
                label="Tu vi"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "tu-vi"}
                onClick={() => handleItemClick("tu-vi")}
                href="/dashboard"
            />
            <NavItem
                label="Bình luận"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "binh-luan"}
                onClick={() => handleItemClick("binh-luan")}
                href="/dashboard"
            />
            <NavItem
                label="Vi phạm"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "vi-pham"}
                onClick={() => handleItemClick("vi-pham")}
                href="/dashboard"
            />
            <NavItem
                label="Tin tức"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "tin-tuc"}
                onClick={() => handleItemClick("tin-tuc")}
                href="/dashboard"
            />
        </nav>
    )
}

export default Navigation;
