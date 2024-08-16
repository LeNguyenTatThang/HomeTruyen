"use client"
import React from 'react'
import Img from 'next/image'
import { Button } from '@/components/ui/button'

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
        <div className="container mx-auto">
            <h3>Truyen moi cap nhat</h3>
            <div className="grid grid-cols-4 gap-4">
                {cardData.map(({ nameStory, author }) => (
                    <div
                        key={nameStory}
                        className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl h-96 w-full">
                        <img
                            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                            alt="card-image"
                            className="object-cover w-full h-64 rounded-t-xl"
                        />
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {nameStory}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {author}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                Danh gia
                            </p>
                        </div>
                        <div className="mx-2 mt-0 pb-2 flex">
                            <Button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                type="button">
                                Doc chuong moi
                            </Button>
                            <Button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                type="button">
                                Doc tu dau
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
