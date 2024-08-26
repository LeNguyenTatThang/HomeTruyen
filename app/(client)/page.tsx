"use client"
import React from 'react'
import Card from './components/Card'
import Swiper from './components/Swiper'
import { useState } from "react"
import { StoriesNew } from './components/StoriesNew'
import { StoriesDone } from './components/StoriesDone'
const Home = () => {
  const story = [
    { id: 1, nameStory: "Dau pha thuong khung", author: "John Doe", slug: "dau-pha-thuong-khung" },
    { id: 2, nameStory: "Dau la dai luc", author: "Marry", slug: "dau-la-dai-luc" },
    { id: 3, nameStory: "Pham nhan tu tien", author: "Tony", slug: "pham-nhan-tu-tien" },
    { id: 4, nameStory: "Tru tien", author: "Thor", slug: "tru-tien" },
    { id: 5, nameStory: "Tu la vo than", author: "Loki", slug: "tu-la-vo-than" },
    { id: 6, nameStory: "Dau pha thuong khung", author: "John Doe", slug: "dau-pha-thuong-khung" },
    { id: 7, nameStory: "Dau la dai luc", author: "Marry", slug: "dau-la-dai-luc" },
    { id: 8, nameStory: "Pham nhan tu tien", author: "Tony", slug: "pham-nhan-tu-tien" },
    { id: 9, nameStory: "Tru tien", author: "Thor", slug: "tru-tien" },
    { id: 10, nameStory: "Tu la vo than", author: "Loki", slug: "tu-la-vo-than" }
  ]

  return (
    <>
      <>
        <div className="container">
          <div className='flex justify-between my-6'>
            <span className="text-2xl font-bold text-black dark:text-white uppercase">
              Truyện Hot trong ngày
            </span>
          </div>
        </div>
        <Swiper />
      </>
      <div className='container'>
        <Card cardData={story} />
        <StoriesNew />
        <StoriesDone cardData={story} />
      </div>

    </>
  )
}

export default Home