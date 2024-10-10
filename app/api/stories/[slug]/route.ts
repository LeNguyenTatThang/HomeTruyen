import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'
interface Chapter {
    title: string
    content: string
    order: number
}
export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params
    try {
        await connectToDatabase()
        const story = await Story.findOne({ slug })

        if (!story) {
            return NextResponse.json({ message: 'Story not found' }, { status: 404 })
        }
        story.chapters.sort((a: Chapter, b: Chapter) => a.order - b.order)
        return NextResponse.json(story)
    } catch (error) {
        console.error('Error fetching story:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}
