import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'

export async function GET() {
    try {
        await connectToDatabase();
        const latestStories = await Story.find({ status: 'Hoàn thành' })
            .sort({ publisheDate: -1 })
            .limit(16)
            .select('_id title coverImage slug author')

        return NextResponse.json(latestStories, { status: 200 })
    } catch (error) {
        console.error('Error fetching latest stories:', error);
        return NextResponse.json({ message: 'Error fetching latest stories' }, { status: 500 })
    }
}
