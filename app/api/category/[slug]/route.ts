import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    let { slug } = params
    const formattedSlug = slug
        .split('%20')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    try {
        await connectToDatabase()
        console.log(formattedSlug);

        const stories = await Story.find({ genre: { $in: [formattedSlug] } })

        if (!stories || stories.length === 0) {
            return NextResponse.json({ message: 'Không có truyện nào trong thể loại này.' }, { status: 404 })
        }

        return NextResponse.json({ stories, genreName: formattedSlug })
    } catch (error) {
        console.error('Error fetching stories for genre:', error)
        return NextResponse.json({ message: 'Lỗi máy chủ.' }, { status: 500 })
    }
}
