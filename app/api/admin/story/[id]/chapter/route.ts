import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    await connectToDatabase()

    // Lấy storyId từ URL, tránh lấy phần "chapter"
    const url = new URL(req.url)
    const pathSegments = url.pathname.split('/')
    const storyId = pathSegments[pathSegments.length - 2]  // lấy phần tử trước 'chapter'

    const { title, content, order } = await req.json()

    try {
        const story = await Story.findById(storyId)
        if (!story) {
            return NextResponse.json({ message: "Story not found" }, { status: 404 })
        }

        story.chapters.push({ title, content, order })
        await story.save()

        return NextResponse.json({ message: "Chapter added successfully", story }, { status: 201 })
    } catch (error) {
        console.error('Error adding chapter:', error)
        return NextResponse.json({ message: "Error adding chapter" }, { status: 500 })
    }
}
