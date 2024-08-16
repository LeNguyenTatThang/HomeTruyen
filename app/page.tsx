import React from 'react'
import Card from './client/components/Card'
import Swiper from './client/components/Swiper'
const Home = () => {
  const story = [
    { nameStory: "Dau pha thuong khung", author: "John Doe" },
    { nameStory: "Dau la dai luc", author: "Marry" },
    { nameStory: "Pham nhan tu tien", author: "Tony" },
    { nameStory: "Tru tien", author: "Thor" },
    { nameStory: "Tu la vo than", author: "Loki" }
  ]
  return (
    <>
      <div>
        <div className="container">Truyện hot trong ngày</div>
        <Swiper />
      </div>
      <Card cardData={story} />
    </>
  )
}

export default Home