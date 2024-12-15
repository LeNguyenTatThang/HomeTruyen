"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '../../loading'
import { fetchCategoryBySlug } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'

interface Chapter {
    title: string
}

const CategorySlug = () => {
    const params = useParams()
    const slug = params.slug as string
    const [story, setStory] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const data = await fetchCategoryBySlug(slug)
                setStory(data.stories)
            } catch (err) {
                setError('Không có dữ liệu cho thể loại này!!!')
            } finally {
                setLoading(false)
            }
        }

        fetchStory()
    }, [slug])
    console.log(story);

    if (loading) return <Loading />
    if (error) return <div>{error}</div>
    if (!story || !Array.isArray(story)) return <div>Không tìm thấy truyện hoặc dữ liệu không hợp lệ.</div>

    return (
        <div className='container min-h-screen py-10'>
            <div className="flex flex-wrap gap-5">
                <div className="grid md:grid-cols-8 sm:grid-cols-4 grid-cols-4 gap-5 flex-grow">
                    {story.map(({ _id, title, coverImage, slug }) => (
                        <div
                            key={_id}
                            className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
                        >
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategorySlug
