"use client"
import React, { useState } from "react"
import NavItem from "./NavItem"

const Navigation = () => {
    const [activeItem, setActiveItem] = useState<string | null>("dashboard")

    const handleItemClick = (item: string) => {
        setActiveItem(item)
    }

    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavItem
                label="Thống kê tổng quan"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "auhtor"}
                onClick={() => handleItemClick("auhtor")}
                href="/author"
            />
            <NavItem
                label="Danh sách truyện"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "danh-sach-truyen"}
                onClick={() => handleItemClick("danh-sach-truyen")}
                href="/author/danh-sach-truyen"
            >
                <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</div>
            </NavItem>
            <NavItem
                label="Thống kê lượt xem"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "thong-ke-luot-xem"}
                onClick={() => handleItemClick("thong-ke-luot-xem")}
                href="/author/thong-ke-luot-xem"
            />
            <NavItem
                label="Cài đặt thanh toán"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "cai-dat-thanh-toan"}
                onClick={() => handleItemClick("cai-dat-thanh-toan")}
                href="/author/cai-dat-thanh-toan"
            />
            <NavItem
                label="Đổi linh thạch"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "doi-linh-thach"}
                onClick={() => handleItemClick("doi-linh-thach")}
                href="/author/doi-linh-thach"
            />
            <NavItem
                label="Độc giả ủng hộ"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "doc-gia-ung-ho"}
                onClick={() => handleItemClick("doc-gia-ung-ho")}
                href="/author/doc-gia-ung-ho"
            />
            <NavItem
                label="Độc giả đọc chương thu phí"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "doc-gia-doc-chuong-thu-phi"}
                onClick={() => handleItemClick("doc-gia-doc-chuong-thu-phi")}
                href="/author/doc-gia-doc-chuong-thu-phi"
            />
            <NavItem
                label="Câu hỏi thường gặp"
                icon={<div className="h-4 w-4" />}
                isActive={activeItem === "cau-hoi-thuong-gap"}
                onClick={() => handleItemClick("cau-hoi-thuong-gap")}
                href="/author/cau-hoi-thuong-gap"
            />
        </nav>
    )
}

export default Navigation
