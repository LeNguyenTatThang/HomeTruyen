"use client"
import React from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import ShineBorder from "@/components/magicui/shine-border"
import 'swiper/css'
import BoxReveal from '@/components/magicui/box-reveal'
const data = [
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczO34mHOHwPgwAG8Ta7BrHHrv_EbaPul2GiIeaBhTmXZctqdlEP-qm0NMSN29d8xSbPVzfayA_BXeMl7JL25z5iDbbYiv1hRkZq7GuyRZ_qc_mYHd5yutolwm0zDNoAGyUVIGylTArrh972ChL88rcmC=w215-h322-s-no-gm?authuser=0",
    name: "Marie Edwards",
    role: "Web Designer"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczMtN4l5gwwV3WcYxziogtn3XXveXTgsoBuRyVLJw9zVjyf3A8IHgyyiID4S9wpSb_wrp5xHbxoDQDeOYyCCRbe209Sf6p-dvH6-Mc5rNtjuoepeBSDmGyRjw7ZqU1MoeBSfr4V6uCIx9SmqD6OGkzv_=w215-h322-s-no-gm?authuser=0",
    name: "John Doe",
    role: "Software Engineer"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOtcECLSS98iEgguatvk6oaH5Pv_c2d4T1_4L6SOf3-W01L0u8RDmNw14DspRQHAU3SNSTTQ9-3M6PINc0d5dWpA6pOmrqKeZebn543_4i4HbzNyl2W3YtgeKc9pA2gxdSODd82ZiF4SqbQTQ7jQPq2=w215-h322-s-no-gm?authuser=0",
    name: "Jane Smith",
    role: "Product Manager"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPa0T61GRbZ2YiZF5LuEidB_1ScBwday6nS0RWwPTbkzKqvp2v0PY0hEjNtBycS0jXOBPaBSR-g5unH2KrYYoKTqo4WLDx02aWG8mDXpWg-pFeRjGMmkLFXqEkUYnn8dwjsVMNZebHTBESx7Au4Yo0_=w215-h322-s-no-gm?authuser=0",
    name: "Michael Brown",
    role: "Data Scientist"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPpl68loMJJ8XRhscmmoVlvMNeXdnsWrWjQVKAtBOEsNaLonGKEAQHVheUUx4krsyJhHUA9ukGBJ347V2dyn3Fn_WubVX-CNOE66ufY4TEifBAytw5a-u1xMwzfOcZyQ2OHJl7O1KVS8aWVLl6ivbT4=w215-h322-s-no-gm?authuser=0",
    name: "Emily Johnson",
    role: "UX/UI Designer"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN4EeyROwDNlEw2nU24D1wWzVza32Wjb4tOZ_rE_zFAyERozPr_DMuzxFFOpJM-jE2_Alb5eEIyV3sfl6dBgzexRG_2oiXzb3k0htftqlep7EUpzyFcpSPGgR4xiIGkhNyBrGMUztM7yJwMTb-9BvIs=w215-h322-s-no-gm?authuser=0",
    name: "David Wilson",
    role: "Backend Developer",
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczOYv9yFmJCHzKvjRAGJJQ5vsWHsBriFxkwtmZwjEZBMr1AM-I4fHb7Ok1rJHKqsdwZpouqKJqZWYviVwWyGIZgteHBuDpg4DuRv_VzryxfWS1Xdo9O6iuMbJutIiC_G0DWh3V_0MvwCkATK0RnfJ_3p=w215-h322-s-no-gm?authuser=4",
    name: "Sophia Miller",
    role: "Marketing Specialist"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN5Lu4IgtSXqC9k47hQH9qE4kZmgjuBSX_2d6Ot9C6a-OvJhFBanEmO58Q0m522GxfojKcBKis6hZCtO39DjuU3Vk3WUKPoB727lI44rzIqa3gk1fmSezE9YQDeMJWELoKlCrX-ef0oMv4IEGEzjYoL=w215-h322-s-no-gm?authuser=0",
    name: "Oliver Martinez",
    role: "System Administrator"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczN9okMbFA5jovBYhwmF8_djexfdSq6zq05ynJlQYu44asbNxC0a_QmBEO45SqseeJ24T-mL50UK-wVLc1jqf-Dpw7F72dr5U1PfteB102fJtUBiDkkgM-y1SU7Vz9AKljvBJWjAazUHTR95X6eo8N1W=w215-h322-s-no-gm?authuser=4",
    name: "Isabella Garcia",
    role: "Content Writer"
  },
  {
    imgSrc: "https://lh3.googleusercontent.com/pw/AP1GczPvPCMS-lbXacrssiF-ZKLusTSNejus4sLb1gJZBZFn5oIzsngcXWPDbk7ub_BvkD418xxKuc050w2MB53rErKaag8QI1rivk16IarfhH85Xi_4lWWqsI_GQdBmuwkK9CRzVFxQ83tm_JvV16hFGWFw=w215-h322-s-no-gm?authuser=1",
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
        rotate: 30,
        stretch: -30,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 4,
          spaceBetween: -20
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: -30
        }
      }}
    >
      {
        data.map((member, index) => (
          <SwiperSlide key={index}>
            <BoxReveal boxColor={"#f3f4f6"} duration={0.5} width={'100%'}>
              <div className='h-[200px] w-[300px]'>
                <ShineBorder
                  className="p-0 m-0 relative flex h-full w-full flex-col items-center justify-center bg-background"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    width={380}
                    height={200}
                    priority
                    className="custom-image-class" />
                </ShineBorder>
              </div>
            </BoxReveal>
            <h3 className='text-center'>
              {member.name}
            </h3>
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
}

export default My3DSwiper
