"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import React from "react"
import { usePathname } from 'next/navigation'
export const Colors = ({ setBgColor, setFontFamily, setFontSize, setLineHeight }: {
    setBgColor: (value: string) => void,
    setFontFamily: (value: string) => void,
    setFontSize: (value: string) => void,
    setLineHeight: (value: string) => void
}) => {
    const [isHomePage, setIsHomePage] = React.useState(false)
    const pathname = usePathname()
    const [selectedFont, setSelectedFont] = React.useState<string>('Open Sans')
    const [selectedFontSize, setSelectedFontSize] = React.useState<string>('22px')
    const [selectedLine, setSelectedLine] = React.useState<string>('120%')
    React.useEffect(() => {
        if (pathname === '/') {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }

    }, [pathname])

    React.useEffect(() => {
        const savedFontFamily = localStorage.getItem("fontFamily")
        if (savedFontFamily) {
            setSelectedFont(savedFontFamily)
            setFontFamily(savedFontFamily)
        }
    }, [setFontFamily])

    React.useEffect(() => {
        const savedFontSize = localStorage.getItem("fontSize")
        if (savedFontSize) {
            setSelectedFontSize(savedFontSize)
            setFontSize(savedFontSize)
        }
    }, [setFontSize])

    const handleColorChange = (value: string) => {
        setBgColor(value)
        localStorage.setItem("backgroundColor", value)
    }

    const handleFontTextChange = (value: string) => {
        setFontFamily(value)
        localStorage.setItem("fontFamily", value)
    }

    const handleFontSizeChange = (value: string) => {
        setFontSize(value)
        localStorage.setItem('fontSize', value)
    }
    const handleLineChange = (value: string) => {
        setLineHeight(value)
        localStorage.setItem('lineHeight', value)
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3550224 4.8338012 7.5961042 5.2674041 6.9296875 5.8144531 L 5.2851562 5.2480469 C 4.8321563 5.0920469 4.33375 5.2793594 4.09375 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0447181 11.130337 4 11.559284 4 12 C 4 12.440716 4.0447181 12.869663 4.1132812 13.291016 L 2.7949219 14.4375 C 2.4339219 14.7515 2.3469375 15.278359 2.5859375 15.693359 L 4.09375 18.306641 C 4.33275 18.721641 4.8321562 18.908906 5.2851562 18.753906 L 6.9296875 18.1875 C 7.5958842 18.734206 8.3553934 19.166339 9.1757812 19.476562 L 9.5097656 21.191406 C 9.6017656 21.661406 10.011234 22 10.490234 22 L 13.509766 22 C 13.988766 22 14.398234 21.661406 14.490234 21.191406 L 14.824219 19.476562 C 15.644978 19.166199 16.403896 18.732596 17.070312 18.185547 L 18.714844 18.751953 C 19.167844 18.907953 19.66625 18.721641 19.90625 18.306641 L 21.414062 15.691406 C 21.653063 15.276406 21.566078 14.7515 21.205078 14.4375 L 19.886719 13.291016 C 19.955282 12.869663 20 12.440716 20 12 C 20 11.559284 19.955282 11.130337 19.886719 10.708984 L 21.205078 9.5625 C 21.566078 9.2485 21.653063 8.7216406 21.414062 8.3066406 L 19.90625 5.6933594 C 19.66725 5.2783594 19.167844 5.0910937 18.714844 5.2460938 L 17.070312 5.8125 C 16.404116 5.2657937 15.644607 4.8336609 14.824219 4.5234375 L 14.490234 2.8085938 C 14.398234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 8 C 14.209 8 16 9.791 16 12 C 16 14.209 14.209 16 12 16 C 9.791 16 8 14.209 8 12 C 8 9.791 9.791 8 12 8 z"></path>
                    </svg>
                    Tùy chỉnh
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">

                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Tùy chỉnh giao diện</h4>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Màu nền</Label>
                            <Select onValueChange={handleColorChange}>
                                <SelectTrigger className="w-44 mr-4">
                                    <SelectValue placeholder="Mặc định" />
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
                        </div>
                        {!isHomePage && (
                            <>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxWidth">Font chữ</Label>
                                    <Select onValueChange={handleFontTextChange}>
                                        <SelectTrigger className="w-44 mr-4">
                                            <SelectValue placeholder={selectedFont} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Chọn font chữ</SelectLabel>
                                                <SelectItem value="Roboto">Roboto</SelectItem>
                                                <SelectItem value="Open Sans">Open Sans</SelectItem>
                                                <SelectItem value="Lora">Lora</SelectItem>
                                                <SelectItem value="Merriweather">Merriweather</SelectItem>
                                                <SelectItem value="Source Sans Pro">Source Sans Pro</SelectItem>
                                                <SelectItem value="Noto Sans">Noto Sans</SelectItem>
                                                <SelectItem value="PT Serif">PT Serif</SelectItem>
                                                <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                                                <SelectItem value="Arial">Arial</SelectItem>
                                                <SelectItem value="Helvetica">Helvetica</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="height">Font size</Label>
                                    <Select onValueChange={handleFontSizeChange}>
                                        <SelectTrigger className="w-44 mr-4">
                                            <SelectValue placeholder={selectedFontSize} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Chọn font size</SelectLabel>
                                                <SelectItem value="16px">16px</SelectItem>
                                                <SelectItem value="18px">18px</SelectItem>
                                                <SelectItem value="20px">20px</SelectItem>
                                                <SelectItem value="22px">22px</SelectItem>
                                                <SelectItem value="24px">24px</SelectItem>
                                                <SelectItem value="26px">26px</SelectItem>
                                                <SelectItem value="28px">28px</SelectItem>
                                                <SelectItem value="30px">30px</SelectItem>
                                                <SelectItem value="32px">32px</SelectItem>
                                                <SelectItem value="34px">34px</SelectItem>
                                                <SelectItem value="36px">36px</SelectItem>
                                                <SelectItem value="38px">38px</SelectItem>
                                                <SelectItem value="40px">40px</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxHeight">Chiều cao dòng</Label>
                                    <Select onValueChange={handleLineChange}>
                                        <SelectTrigger className="w-44">
                                            <SelectValue placeholder="120%" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel className="mr-6">Chọn chiều cao dòng</SelectLabel>
                                                <SelectItem value="100%">100%</SelectItem>
                                                <SelectItem value="120%">120%</SelectItem>
                                                <SelectItem value="140%">140%</SelectItem>
                                                <SelectItem value="160%">160%</SelectItem>
                                                <SelectItem value="180%">180%</SelectItem>
                                                <SelectItem value="200%">200%</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="maxHeight">Full khung</Label>
                                    <Switch />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>

    )
}
