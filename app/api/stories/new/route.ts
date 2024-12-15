import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'

export async function GET() {
    try {
        await connectToDatabase()
        const stories = await Story.aggregate([
            { $unwind: "$chapters" },
            { $sort: { publisheDate: -1, "chapters.order": -1 } },
            {
                $group: {
                    _id: "$_id",
                    title: { $first: "$title" },
                    author: { $first: "$author" },
                    genre: { $first: "$genre" },
                    latestChapter: { $first: "$chapters" },
                    publishedDate: { $first: "$publishedDate" },
                    slug: { $first: "$slug" }
                }
            },
            { $limit: 26 }
        ])

        return NextResponse.json(stories, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching latest stories' }, { status: 500 })
    }
}
