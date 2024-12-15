import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

export async function checkLogin(req: Request) {
    const authHeader = req.headers.get('Authorization');
    const token = authHeader?.split(' ')[1]; // Lấy token từ `Bearer <token>`

    if (!token) {
        return { isAuthenticated: false, message: 'Missing token' };
    }

    try {
        // Giải mã token
        const decoded = jwt.verify(token, SECRET_KEY);
        return { isAuthenticated: true, user: decoded };
    } catch (error) {
        return { isAuthenticated: false, message: 'Invalid or expired token' };
    }
}
