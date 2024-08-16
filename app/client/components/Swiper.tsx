"use client"
import React from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
const data = [
  {
    imgSrc: "https://images.pexels.com/photos/3775583/pexels-photo-3775583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Marie Edwards",
    role: "Web Designer"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775584/pexels-photo-3775584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "John Doe",
    role: "Software Engineer"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775585/pexels-photo-3775585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Jane Smith",
    role: "Product Manager"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775586/pexels-photo-3775586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Michael Brown",
    role: "Data Scientist"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775587/pexels-photo-3775587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Emily Johnson",
    role: "UX/UI Designer"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775588/pexels-photo-3775588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "David Wilson",
    role: "Backend Developer",
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775589/pexels-photo-3775589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Sophia Miller",
    role: "Marketing Specialist"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775590/pexels-photo-3775590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Oliver Martinez",
    role: "System Administrator"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775591/pexels-photo-3775591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Isabella Garcia",
    role: "Content Writer"
  },
  {
    imgSrc: "https://images.pexels.com/photos/3775592/pexels-photo-3775592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Liam Rodriguez",
    role: "Frontend Developer"
  }
]

const My3DSwiper = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      slidesPerGroup={1}
      slideToClickedSlide={true}
      allowTouchMove={true}
      loop={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: -30,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: -30
        }
      }}
    >
      {
        data.map((member, index) => (
          <SwiperSlide key={index}>
            <Image
              src={member.imgSrc}
              alt={member.name}
              width={480}
              height={300} />
            <h3 className='text-center'>
              {member.name}
            </h3>
          </SwiperSlide>
        ))
      }
      < div className="swiper-pagination" ></div >
    </Swiper >
  )
}

export default My3DSwiper
