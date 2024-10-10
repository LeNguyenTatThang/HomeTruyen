"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import BoxReveal from "@/components/magicui/box-reveal"
import TypingAnimation from "@/components/magicui/typing-animation"
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
interface Story {
  _id: string
  title: string
  coverImage: string
  slug: string
  children?: React.ReactNode
}

interface CardProps {
  cardData: Story[]
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <AnimatePresence mode="sync">
      <div className="mx-auto">
        <div className='flex justify-between my-6'>
          <span className="text-2xl font-bold text-black dark:text-white uppercase">
            Truyện Hot
          </span>
          <Button className='bg-yellow-50 hover:bg-yellow-200 text-black'>✨ Xem tất cả</Button>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-4 gap-5 flex-grow">
            {cardData.map(({ _id, title, coverImage, slug }) => (
              <div
                key={_id}
                className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
              >
                <BoxReveal boxColor={"#f3f4f6"} duration={0.5} width={'100%'}>
                  <>
                    <Link href={`/${slug}`}>
                      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 flex items-end">
                          <Image
                            src={coverImage}
                            alt={slug}
                            width={380}
                            height={200}
                            priority
                            className="w-full h-32 md:h-64 object-cover"
                          />
                          <div className="absolute bg-slate-500 bg-opacity-50 p-2 rounded text-white w-full flex justify-center">
                            <p className="font-sans font-medium leading-relaxed text-center md:text-xs text-[10px]">
                              {title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                </BoxReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Card
