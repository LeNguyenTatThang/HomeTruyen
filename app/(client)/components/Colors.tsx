"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export const Colors = ({ setBgColor }: { setBgColor: (value: string) => void }) => {

    const handleColorChange = (value: string) => {
        setBgColor(value);
        localStorage.setItem("backgroundColor", value)
    }

    return (
        <Select onValueChange={handleColorChange}>
            <SelectTrigger className="w-44 mr-4">
                <SelectValue placeholder="Chọn màu nền" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Chọn màu nền</SelectLabel>
                    <SelectItem value="white">Mặc định</SelectItem>
                    <SelectItem value="#F5F5DC">Nâu nhạt</SelectItem>
                    <SelectItem value="#D3D3D3">Xám nhạt</SelectItem>
                    <SelectItem value="#FFFFF0">Ngà</SelectItem>
                    <SelectItem value="#E6E6FA">Hoa oải hương</SelectItem>
                    <SelectItem value="#FFDAB9">Đào nhạt</SelectItem>
                    <SelectItem value="#F5FFFA">Kem bạc hà</SelectItem>
                    <SelectItem value="#E0FFFF">Xanh nhạt</SelectItem>
                    <SelectItem value="#EEE8AA">Vàng nhạt</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
