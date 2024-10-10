// src/app/api/auth/login/route.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectToDatabase from '@/lib/mongodb';
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Chỉ chấp nhận phương thức POST' }, { status: 405 });
    }
    const { email, password } = await req.json();

    try {
        await connectToDatabase();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'Tài khoản không tồn tại' }, { status: 400 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Sai mật khẩu' }, { status: 401 });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const token = jwt.sign(
            { userId: user._id, name: user.name, email: user.email, avatar: user.avatar },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        return NextResponse.json({
            message: 'Đăng nhập thành công',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                avatar: user.avatar
            }


        }, {
            status: 200,
            headers: {
                'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`
            }
        });
    } catch (error) {
        return NextResponse.json({ message: 'Lỗi hệ thống' }, { status: 500 });
    }
}
