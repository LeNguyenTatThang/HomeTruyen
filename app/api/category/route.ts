import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Category from '@/app/models/Category'

export async function GET() {
    try {
        await connectToDatabase();
        const categories = await Category.find({}).exec()

        return NextResponse.json(categories, { status: 200 })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json({ message: 'Error fetching categories' }, { status: 500 })
    }
}
