import React from 'react'
import Nav from './components/Nav'
import Swiper from './components/Swiper'
import Card from './components/Card'
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
            <nav> <Nav /></nav>
            <div>
                <div className="container">Truyện hot trong ngày</div>
                <Swiper />
            </div>
            <Card cardData={story} />
        </>
    )
}

export default Home