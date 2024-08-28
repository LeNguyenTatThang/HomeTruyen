import React from 'react'
import { Button } from '@/components/ui/button'
import BoxReveal from "@/components/magicui/box-reveal"
import TypingAnimation from "@/components/magicui/typing-animation"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
interface Story {
    id: number
    nameStory: string
    author: string
    img: string
    slug: string
    children?: React.ReactNode
}

interface CardProps {
    cardData: Story[]
}
export const StoriesDone: React.FC<CardProps> = ({ cardData }) => {
    return (
        <AnimatePresence mode="sync">
            <div className="mx-auto my-6">
                <Button className="p-3 mb-6 bg-orange-50 hover:bg-orange-200 uppercase pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    <TypingAnimation
                        className="text-2xl font-bold text-black dark:text-white"
                        text="Truyện đã hoàn thành"
                    />
                </Button>
                <div className="flex flex-wrap gap-5">
                    <div className="grid md:grid-cols-7 sm:grid-cols-2 grid-cols-2 gap-5 flex-grow">
                        {cardData.map(({ id, nameStory, img, author }) => (
                            <div
                                key={id}
                                className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                                <Image
                                    src={img}
                                    alt={nameStory}
                                    width={380}
                                    height={200}
                                    priority
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-1 text-xs">
                                    <p className="text-xs font-sans antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                                        {nameStory}
                                    </p>
                                    <p className="font-sans text-xs antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                                        {author}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    )
}
