import { checkLogin } from '@/lib/checkLogin'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    await connectToDatabase()

    // Kiểm tra đăng nhập
    const loginCheck = await checkLogin(req)
    if (!loginCheck.isAuthenticated) {
        return NextResponse.json({ message: loginCheck.message }, { status: 401 })
    }

    // Lấy storyId từ URL
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/')
    const storyId = pathSegments[pathSegments.length - 2]

    const { title, content, order } = await req.json()

    if (!title || !content || typeof order !== 'number') {
        return NextResponse.json({ message: 'Invalid chapter data' }, { status: 400 })
    }

    try {
        const story = await Story.findById(storyId)
        if (!story) {
            return NextResponse.json({ message: 'Story not found' }, { status: 404 })
        }

        story.chapters.push({ title, content, order })
        await story.save()

        return NextResponse.json({ message: 'Chapter added successfully', story }, { status: 201 })
    } catch (error) {
        console.error('Error adding chapter:', error)
        return NextResponse.json({ message: 'Error adding chapter' }, { status: 500 })
    }
}
