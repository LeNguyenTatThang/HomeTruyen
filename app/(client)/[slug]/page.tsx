"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '../loading'
import { fetchStoryBySlug } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
interface Chapter {
  title: string
}
const StoryDetail = () => {
  const params = useParams()
  const slug = params.slug as string
  const [story, setStory] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await fetchStoryBySlug(slug)
        setStory(data)
      } catch (err) {
        setError('Lỗi khi tải dữ liệu.')
      } finally {
        setLoading(false)
      }
    }

    fetchStory()
  }, [slug])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>
  if (!story) return <div>Không tìm thấy truyện.</div>

  return (
    <div className='container min-h-screen py-10'>
      <a href="#" className="w-full flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          className="object-cover rounded-t-lg w-full h-96 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg mx-auto"
          width={200}
          height={385}
          src="https://lh3.googleusercontent.com/pw/AP1GczO34mHOHwPgwAG8Ta7BrHHrv_EbaPul2GiIeaBhTmXZctqdlEP-qm0NMSN29d8xSbPVzfayA_BXeMl7JL25z5iDbbYiv1hRkZq7GuyRZ_qc_mYHd5yutolwm0zDNoAGyUVIGylTArrh972ChL88rcmC=w215-h322-s-no-gm?authuser=0"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {story.nameStory}
          </h5>
          <p>Tác giả: {story.author}</p>
          <p>Giới thiệu:</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {story.description}
          </p>
          <p>Thể loại: {story.genre}</p>
        </div>
      </a>

      <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-3 bg-white dark:bg-gray-800">
        {story && story.chapters && story.chapters.length > 0 ? (
          story.chapters.map((chapter: Chapter, index: number) => (
            <figure key={index} className="flex flex-col p-1 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl text-gray-500 dark:text-gray-400">
                <Link href={`/${slug}/chuong-${index + 1}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:cursor-pointer hover:underline">{chapter.title}</h3>
                </Link>
              </blockquote>
            </figure>
          ))
        ) : (
          <p className='text-center'>Truyện này chưa có chapter nào</p>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Bình luận</h3>
        <form className="mt-4">
          <textarea
            placeholder="Viết bình luận..."
            className="block w-full p-2 border rounded mb-2"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Gửi bình luận</button>

        </form>
      </div>
    </div>
  )
}

export default StoryDetail
