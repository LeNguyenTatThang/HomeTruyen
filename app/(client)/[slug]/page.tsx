"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loading from '../loading'
import { fetchStoryBySlug } from '@/lib/api'

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
    if (!story) return <div>Truyện không tìm thấy.</div>

    return (
        <div>
            <h1>{story.nameStory}</h1>
            <p>Author: {story.author}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae eligendi reiciendis pariatur ipsum! Consectetur officiis ducimus soluta numquam, dolorem qui rem ullam consequuntur magnam, enim suscipit temporibus, quasi nihil quae.</p>
        </div>
    )
}

export default StoryDetail
