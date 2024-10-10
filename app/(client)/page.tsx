"use client"
import React from 'react'
import Card from './components/Card'
import Swiper from './components/Swiper'
import { StoriesNew } from './components/StoriesNew'
import { StoriesDone } from './components/StoriesDone'
import { getLastestStories, getCompletedStories } from '@/lib/api'
const Home = () => {
  //getLastestStories
  const [stories, setStories] = React.useState([])
  const [completedStories, setCompletedStories] = React.useState([])
  React.useEffect(() => {
    const fetchStories = async () => {
      try {
        const latestStories = await getLastestStories()
        setStories(latestStories)
      } catch (error) {
        console.error('Error fetching latest stories:', error)
      }
    }
    const completedStories = async () => {
      try {
        const latestStories = await getCompletedStories()
        setCompletedStories(latestStories)
      } catch (error) {
        console.error('Error fetching latest stories:', error)
      }
    }
    fetchStories()
    completedStories()
  }, [])
  return (
    <>
      <>
        <div className="container px-2">
          <div className='flex justify-between py-6'>
            <span className="text-2xl font-bold text-black dark:text-white uppercase">
              Truyện Hot trong ngày
            </span>
          </div>
        </div>
        <Swiper />
      </>
      <div className='container'>
        <Card cardData={stories} />
        <StoriesNew />
        <StoriesDone cardData={completedStories} />
      </div>
    </>
  )
}

export default Home