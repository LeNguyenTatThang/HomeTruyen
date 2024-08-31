import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({ message: 'Connected to MongoDB' })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to connect' }, { status: 500 })
    }
}
