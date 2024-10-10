import connectToDatabase from '@/lib/mongodb'
import User from '@/app/models/User'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Chỉ chấp nhận phương thức POST' }, { status: 405 })
    }

    const { name, email, password } = await req.json()

    try {
        await connectToDatabase()

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json({ message: 'Email đã được đăng ký' }, { status: 400 })
        }

        const newUser = new User({
            name,
            email,
            password
        })

        await newUser.save()
        return NextResponse.json({ message: 'Đăng ký thành công' }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: 'Lỗi hệ thống' }, { status: 500 })
    }
}
