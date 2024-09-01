import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Category from '@/app/models/Category'

export async function DELETE(req: Request) {
    const url = new URL(req.url)
    const id = url.pathname.split('/').pop() || ''

    await connectToDatabase()

    try {
        const deletedCategory = await Category.findByIdAndDelete(id)
        if (!deletedCategory) {

            return NextResponse.json({ message: 'Category not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'Category deleted successfully' })
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting category' }, { status: 500 })
    }
}
export async function PUT(req: Request) {
    const url = new URL(req.url)
    const id = url.pathname.split('/').pop() || ''

    await connectToDatabase()

    try {
        const body = await req.json()
        const { name } = body

        if (!name) {
            return NextResponse.json({ message: 'Name is required' }, { status: 400 })
        }

        const updateCategory = await Category.findByIdAndUpdate(id, { name }, { new: true })
        if (!updateCategory) {

            return NextResponse.json({ message: 'Category not found' }, { status: 404 })
        }
        return NextResponse.json(updateCategory)
    } catch (error) {
        return NextResponse.json({ message: 'Error updating category' }, { status: 500 })
    }
}