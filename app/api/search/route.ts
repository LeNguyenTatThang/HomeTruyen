import { NextResponse } from 'next/server'
import Story from '@/app/models/Story'

interface Story {
    _id: string
    title: string
    coverImage: string
}

export async function GET(req: Request) {
    const url = new URL(req.url)
    const searchTerm = url.searchParams.get('searchTerm')

    if (!searchTerm) {
        return NextResponse.json({ message: "Search term is required" }, { status: 400 })
    }

    try {
        const filteredStories: Story[] = await Story.find({
            title: { $regex: new RegExp(searchTerm, 'i') } // Tìm theo trường 'title'
        })

        return NextResponse.json(filteredStories, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error searching stories' }, { status: 500 })
    }
}
