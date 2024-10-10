import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Chỉ chấp nhận phương thức POST' }, { status: 405 })
    }

    try {
        return NextResponse.json({
            message: 'Đăng xuất thành công'
        }, {
            status: 200,
            headers: {
                'Set-Cookie': `token=; HttpOnly; Path=/; Max-Age=0; Secure; SameSite=Strict`
            }
        })
    } catch (error) {
        return NextResponse.json({ message: 'Lỗi hệ thống' }, { status: 500 })
    }
}
