import Image from "next/image"
import React from "react"
import LogoFooter from "@/public/logo_footer.jpg"
const Footer = () => {
    return (
        <footer className="relative py-4 flex flex-col items-center bg-cyan-900 overflow-hidden">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            src={LogoFooter}
                            alt="Home Truyện Logo"
                            width={32}
                            height={32}
                            priority
                        />

                        <span className="text-2xl font-semibold text-white">Home truyện</span>
                    </a>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-white gap-4 sm:gap-6 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                <div className="text-center relative">
                    <span className="block text-sm text-white">
                        © 2024 <a href="https://flowbite.com/" className="hover:underline">Home Truyện</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center z-0">
                <div aria-hidden="true" className="w-32 h-32 md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl md:blur-3xl"></div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80 z-0"></div>
        </footer>

    )
}
export default Footer