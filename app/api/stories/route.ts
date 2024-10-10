import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'

export async function GET() {
    try {
        await connectToDatabase();
        const stories = await Story.find({})

        return NextResponse.json(stories, { status: 200 })
    } catch (error) {
        console.error('Error fetching stories:', error);
        return NextResponse.json({ message: 'Error fetching stories' }, { status: 500 })
    }
}
