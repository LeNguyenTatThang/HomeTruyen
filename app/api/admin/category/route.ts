import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Category from '@/app/models/Category'
export async function POST(request: Request) {
    try {
        const { name } = await request.json();
        const status = 'on'

        if (!name) {
            return NextResponse.json({ message: 'Name is required' }, { status: 400 })
        }

        await connectToDatabase()

        const existingCategory = await Category.findOne({ name }).exec();
        if (existingCategory) {
            return NextResponse.json({ message: "Name already exists" }, { status: 409 })
        }

        const newCategory = new Category({ name, status })
        await newCategory.save()

        return NextResponse.json({ message: "Category added successfully", categoryId: newCategory._id }, { status: 201 })
    } catch (error) {
        console.error('Error adding category:', error)
        return NextResponse.json({ message: "Error adding category" }, { status: 500 })
    }
}