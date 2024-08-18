"use client"
import React from 'react'
import Card from './components/Card'
import Swiper from './components/Swiper'
import { useState } from "react"
import Particles from "@/components/magicui/particles"
import HyperText from "@/components/magicui/hyper-text"
const Home = () => {
  const story = [
    { nameStory: "Dau pha thuong khung", author: "John Doe" },
    { nameStory: "Dau la dai luc", author: "Marry" },
    { nameStory: "Pham nhan tu tien", author: "Tony" },
    { nameStory: "Tru tien", author: "Thor" },
    { nameStory: "Tu la vo than", author: "Loki" }
  ]
  const [color, setColor] = useState("#000000");

  return (
    <>
      <>
        <div className="container">
          <HyperText
            className="font-sans text-2xl font-bold text-black dark:text-white"
            text="Truyện hot trong ngày"
          />
        </div>
        <Swiper />
      </>
      <>
        <Card cardData={story} />
      </>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </>
  )
}

export default Home