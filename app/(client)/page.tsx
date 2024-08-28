"use client"
import React from 'react'
import Card from './components/Card'
import Swiper from './components/Swiper'
import { useState } from "react"
import { StoriesNew } from './components/StoriesNew'
import { StoriesDone } from './components/StoriesDone'
const Home = () => {
  const story = [
    { id: 1, nameStory: "Dau pha thuong khung", img: "https://lh3.googleusercontent.com/pw/AP1GczO34mHOHwPgwAG8Ta7BrHHrv_EbaPul2GiIeaBhTmXZctqdlEP-qm0NMSN29d8xSbPVzfayA_BXeMl7JL25z5iDbbYiv1hRkZq7GuyRZ_qc_mYHd5yutolwm0zDNoAGyUVIGylTArrh972ChL88rcmC=w215-h322-s-no-gm?authuser=0", author: "John Doe", slug: "dau-pha-thuong-khung" },
    { id: 2, nameStory: "Dau la dai luc", img: "https://lh3.googleusercontent.com/pw/AP1GczMtN4l5gwwV3WcYxziogtn3XXveXTgsoBuRyVLJw9zVjyf3A8IHgyyiID4S9wpSb_wrp5xHbxoDQDeOYyCCRbe209Sf6p-dvH6-Mc5rNtjuoepeBSDmGyRjw7ZqU1MoeBSfr4V6uCIx9SmqD6OGkzv_=w215-h322-s-no-gm?authuser=0", author: "Marry", slug: "dau-la-dai-luc" },
    { id: 3, nameStory: "Pham nhan tu tien", img: "https://lh3.googleusercontent.com/pw/AP1GczOtcECLSS98iEgguatvk6oaH5Pv_c2d4T1_4L6SOf3-W01L0u8RDmNw14DspRQHAU3SNSTTQ9-3M6PINc0d5dWpA6pOmrqKeZebn543_4i4HbzNyl2W3YtgeKc9pA2gxdSODd82ZiF4SqbQTQ7jQPq2=w215-h322-s-no-gm?authuser=0", author: "Tony", slug: "pham-nhan-tu-tien" },
    { id: 4, nameStory: "Tru tien", img: "https://lh3.googleusercontent.com/pw/AP1GczPa0T61GRbZ2YiZF5LuEidB_1ScBwday6nS0RWwPTbkzKqvp2v0PY0hEjNtBycS0jXOBPaBSR-g5unH2KrYYoKTqo4WLDx02aWG8mDXpWg-pFeRjGMmkLFXqEkUYnn8dwjsVMNZebHTBESx7Au4Yo0_=w215-h322-s-no-gm?authuser=0", author: "Thor", slug: "tru-tien" },
    { id: 5, nameStory: "Tu la vo than", img: "https://lh3.googleusercontent.com/pw/AP1GczPpl68loMJJ8XRhscmmoVlvMNeXdnsWrWjQVKAtBOEsNaLonGKEAQHVheUUx4krsyJhHUA9ukGBJ347V2dyn3Fn_WubVX-CNOE66ufY4TEifBAytw5a-u1xMwzfOcZyQ2OHJl7O1KVS8aWVLl6ivbT4=w215-h322-s-no-gm?authuser=0", author: "Loki", slug: "tu-la-vo-than" },
    { id: 6, nameStory: "Dau pha thuong khung", img: "https://lh3.googleusercontent.com/pw/AP1GczN4EeyROwDNlEw2nU24D1wWzVza32Wjb4tOZ_rE_zFAyERozPr_DMuzxFFOpJM-jE2_Alb5eEIyV3sfl6dBgzexRG_2oiXzb3k0htftqlep7EUpzyFcpSPGgR4xiIGkhNyBrGMUztM7yJwMTb-9BvIs=w215-h322-s-no-gm?authuser=0", author: "John Doe", slug: "dau-pha-thuong-khung" },
    { id: 7, nameStory: "Dau la dai luc", img: "https://lh3.googleusercontent.com/pw/AP1GczOYv9yFmJCHzKvjRAGJJQ5vsWHsBriFxkwtmZwjEZBMr1AM-I4fHb7Ok1rJHKqsdwZpouqKJqZWYviVwWyGIZgteHBuDpg4DuRv_VzryxfWS1Xdo9O6iuMbJutIiC_G0DWh3V_0MvwCkATK0RnfJ_3p=w215-h322-s-no-gm?authuser=4", author: "Marry", slug: "dau-la-dai-luc" },
    { id: 8, nameStory: "Pham nhan tu tien", img: "https://lh3.googleusercontent.com/pw/AP1GczN5Lu4IgtSXqC9k47hQH9qE4kZmgjuBSX_2d6Ot9C6a-OvJhFBanEmO58Q0m522GxfojKcBKis6hZCtO39DjuU3Vk3WUKPoB727lI44rzIqa3gk1fmSezE9YQDeMJWELoKlCrX-ef0oMv4IEGEzjYoL=w215-h322-s-no-gm?authuser=0", author: "Tony", slug: "pham-nhan-tu-tien" },
    { id: 9, nameStory: "Tru tien", img: "https://lh3.googleusercontent.com/pw/AP1GczN9okMbFA5jovBYhwmF8_djexfdSq6zq05ynJlQYu44asbNxC0a_QmBEO45SqseeJ24T-mL50UK-wVLc1jqf-Dpw7F72dr5U1PfteB102fJtUBiDkkgM-y1SU7Vz9AKljvBJWjAazUHTR95X6eo8N1W=w215-h322-s-no-gm?authuser=4", author: "Thor", slug: "tru-tien" },
    { id: 10, nameStory: "Tu la vo than", img: "https://lh3.googleusercontent.com/pw/AP1GczPvPCMS-lbXacrssiF-ZKLusTSNejus4sLb1gJZBZFn5oIzsngcXWPDbk7ub_BvkD418xxKuc050w2MB53rErKaag8QI1rivk16IarfhH85Xi_4lWWqsI_GQdBmuwkK9CRzVFxQ83tm_JvV16hFGWFw=w215-h322-s-no-gm?authuser=1", author: "Loki", slug: "tu-la-vo-than" }
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