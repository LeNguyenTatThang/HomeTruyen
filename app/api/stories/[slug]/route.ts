import { NextResponse } from 'next/server';

const stories = [
    { slug: 'dau-pha-thuong-khung', nameStory: 'Dau pha thuong khung', author: 'John Doe' },
    { slug: 'dau-la-dai-luc', nameStory: 'Dau la dai luc', author: 'Marry' },
    { slug: 'pham-nhan-tu-tien', nameStory: 'Pham nhan tu tien', author: 'Tony' },
    { slug: 'tru-tien', nameStory: 'Tru tien', author: 'Thor' },
    { slug: 'tu-la-vo-than', nameStory: 'Tu la vo than', author: 'Loki' }
];

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const story = stories.find((s) => s.slug === slug);

    if (!story) {
        return NextResponse.json({ message: 'Story not found' }, { status: 404 });
    }

    return NextResponse.json(story);
}
