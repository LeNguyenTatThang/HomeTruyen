import connectToDatabase from '@/lib/mongodb'
import Story from '@/app/models/Story'
import { NextResponse } from 'next/server'
import slugify from 'slugify'
import User from '@/app/models/User'
import jwt, { JwtPayload } from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get('Authorization')
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Người dùng chưa đăng nhập!!' }, { status: 401 })
        }

        const token = authHeader.split(' ')[1]

        // Xác minh token
        if (!SECRET) {
            return NextResponse.json({ message: 'JWT_SECRET is not defined' }, { status: 500 })
        }

        let decodedToken
        try {
            decodedToken = jwt.verify(token, SECRET) as JwtPayload // Ép kiểu rõ ràng thành JwtPayload
        } catch (err) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
        }

        const userId = decodedToken?.userId // Lấy userId từ token
        console.log("check token: ", decodedToken)
        if (!userId) {
            return NextResponse.json({ message: 'Người dùng chưa đăng nhập!!' }, { status: 401 })
        }

        const { title, author, userId: bodyUserId, genre, publishedDate, coverImage, description, chapters, reviews, tags, status } = await req.json()
        console.log("check :", bodyUserId)
        if (userId !== bodyUserId) {
            return NextResponse.json({ message: 'User ID does not match' }, { status: 403 })
        }

        const slug = slugify(title, {
            replacement: '-',
            remove: undefined,
            lower: false,
            strict: false,
            locale: 'vi',
            trim: true
        })

        await connectToDatabase()
        const user = await User.findById(userId).select('role')
        if (!user) {
            return NextResponse.json({ message: 'Người dùng không tồn tại' }, { status: 404 })
        }

        if (user.role === 'reader') {
            return NextResponse.json({ message: 'Bạn không có quyền đăng truyện' }, { status: 403 })
        }

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
        await connectToDatabase()
        const categories = await Story.find({}).select('title coverImage author publishedDate slug description').exec()

        return NextResponse.json(categories, { status: 200 })
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json({ message: 'Error fetching categories' }, { status: 500 })
    }
}
