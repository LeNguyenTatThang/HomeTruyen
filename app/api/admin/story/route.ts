import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'
import { NextResponse } from 'next/server'
import slugify from 'slugify'
export async function POST(req: Request) {

    try {
        const { title, author, userId, genre, publishedDate, coverImage, description, chapters, reviews, tags, status } = await req.json()
        const slug = slugify(title, {
            replacement: '-',
            remove: undefined,
            lower: false,
            strict: false,
            locale: 'vi',
            trim: true
        })
        await connectToDatabase()
        const newStory = new Story({
            title,
            slug,
            author,
            userId,
            genre,
            publishedDate,
            coverImage,
            description,
            chapters,
            reviews,
            tags,
            status
        })

        await newStory.save()

        return NextResponse.json({ message: "Story added successfully", story: newStory }, { status: 201 })
    } catch (error) {
        console.error('Error adding story:', error)
        return NextResponse.json({ message: "Error adding story" }, { status: 500 })
    }
}
export async function GET() {
    try {
        await connectToDatabase();
        const categories = await Story.find({}).select('title coverImage author publishedDate slug description').exec()

        return NextResponse.json(categories, { status: 200 })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json({ message: 'Error fetching categories' }, { status: 500 })
    }
}