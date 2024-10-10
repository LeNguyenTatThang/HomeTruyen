import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'

export async function GET(req: Request, { params }: { params: { slug: string; chapter: string } }) {
    try {
        await connectToDatabase()

        const { slug, chapter } = params
        const chapterOrder = parseInt(chapter.replace('chuong-', ''), 10) // Chuyển đổi chapter từ 'chuong-1' thành số

        // Tìm truyện theo slug
        const story = await Story.findOne({ slug: slug })
        console.log('Story:', story)

        if (!story) {
            return NextResponse.json({ message: 'Story not found' }, { status: 404 })
        }

        // Lấy tổng số chương
        const totalChapters = story.chapters.length

        // Tìm chương theo order
        const chapterData = story.chapters.find((ch: { order: number }) => ch.order === chapterOrder)
        console.log('Chapter Data:', chapterData)

        if (!chapterData) {
            return NextResponse.json({ message: 'Chapter not found' }, { status: 404 })
        }

        // Trả về dữ liệu chapter cùng với tổng số chương
        return NextResponse.json({
            story: story.title,
            chapter: chapterData,
            totalChapters: totalChapters
        }, { status: 200 })
    } catch (error) {
        console.error('Error fetching story or chapter:', error)
        return NextResponse.json({ message: 'Error fetching story or chapter' }, { status: 500 })
    }
}
