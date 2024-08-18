"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import DiscordChatWidget from './Discord'
import FacebookPagePlugin from './Facebook'
import BoxReveal from "@/components/magicui/box-reveal"
import Particles from '@/components/magicui/particles'
import TypingAnimation from "@/components/magicui/typing-animation"
interface Story {
    nameStory: string
    author: string
    children?: React.ReactNode
}

interface CardProps {
    cardData: Story[]
}

const Card: React.FC<CardProps> = ({ cardData }) => {
    return (
        <div className="container mx-auto my-6">
            <Button className="p-3 mb-6 bg-orange-50 hover:bg-orange-200 uppercase pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
                <TypingAnimation
                    className="text-2xl font-bold text-black dark:text-white"
                    text="Truyện mới cập nhật"
                />
            </Button>
            <div className="flex flex-wrap gap-3">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 flex-grow">
                    {cardData.map(({ nameStory, author }) => (
                        <div
                            key={nameStory}
                            className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl h-[370px] w-full">
                            <BoxReveal boxColor={"#f3f4f6"} duration={0.5} width={'100%'}>
                                <img
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                    alt="card-image"
                                    className="object-cover w-full h-64 rounded-t-xl"
                                />
                                <div className="p-4">

                                    <div className="flex items-center justify-between">
                                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                            {nameStory}
                                        </p>
                                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                            {author}
                                        </p>
                                    </div>
                                </div>
                                <div className="mx-2 mt-0 pb-2 flex">
                                    <Button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        type="button">
                                        Đọc mới nhất
                                    </Button>
                                    <Button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                        type="button">
                                        Đọc từ đầu
                                    </Button>
                                </div>
                            </BoxReveal>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-3 w-full md:w-auto'>
                    <DiscordChatWidget />
                    <FacebookPagePlugin />
                </div>
                <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    color={"#00000"}
                    refresh
                />
            </div>
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={"#00000"}
                refresh
            />
        </div>
    )
}

export default Card
