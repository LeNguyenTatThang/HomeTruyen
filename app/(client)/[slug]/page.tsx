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
                const data = await fetchStoryBySlug(slug); // Dữ liệu đã là JSON
                setStory(data); // Set dữ liệu trực tiếp
            } catch (err) {
                setError('Lỗi khi tải dữ liệu.')
            } finally {
                setLoading(false);
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
            {/* Hiển thị các chi tiết khác của câu chuyện */}
        </div>
    )
}

export default StoryDetail
