// app/api/admin/category/[id]/route.ts

import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'
import Category from '@/app/models/Category'

export async function DELETE(request: Request) {
    const url = new URL(request.url)
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
