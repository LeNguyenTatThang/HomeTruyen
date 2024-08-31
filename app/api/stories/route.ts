import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'

export async function GET() {
    try {
        const db = await connectToDatabase();
        const storiesCollection = db.collection('stories')
        const stories = await storiesCollection.find({}).toArray()

        return NextResponse.json(stories, { status: 200 })
    } catch (error) {
        console.error('Error fetching stories:', error);
        return NextResponse.json({ message: 'Error fetching stories' }, { status: 500 })
    }
}
