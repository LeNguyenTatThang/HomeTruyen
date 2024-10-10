"use client";
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { getChapterDetail } from '@/lib/api';
import ReactMarkdown from 'react-markdown';

interface ChapterData {
    story: string;
    chapter: {
        title: string;
        content: string;
        order: number; // Thêm thuộc tính order để biết thứ tự chương
    };
}

const ChapterDetail = () => {
    const params = useParams();
    const router = useRouter();
    const { slug, chuong } = params;

    const [chapterData, setChapterData] = useState<ChapterData | null>(null);
    const [totalChapters, setTotalChapters] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                setLoading(true);
                const data = await getChapterDetail(slug as string, chuong as string);
                console.log('Total Chapters:', data.totalChapters);

                setChapterData(data);
                setTotalChapters(data.totalChapters);
            } catch (error) {
                console.error('Error fetching chapter:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChapter();
    }, [slug, chuong]);

    const handleChapterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedChapter = event.target.value;
        router.push(`/${slug}/${selectedChapter}`);
    };

    const goToPreviousChapter = () => {
        const currentChapter = typeof chuong === 'string' ? parseInt(chuong.replace('chuong-', ''), 10) : 1;
        if (currentChapter > 1) {
            const previousChapter = currentChapter - 1;
            router.push(`/${slug}/chuong-${previousChapter}`);
        }
    };

    const goToNextChapter = () => {
        const currentChapter = typeof chuong === 'string' ? parseInt(chuong.replace('chuong-', ''), 10) : 1;
        if (currentChapter < totalChapters) {
            const nextChapter = currentChapter + 1;
            router.push(`/${slug}/chuong-${nextChapter}`);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
            </div>
        );
    }

    const chapterOptions = Array.from({ length: totalChapters }, (_, index) => index + 1);

    return (
        <div className='container min-h-screen py-10'>
            {chapterData ? (
                <div className="no-select">
                    <p className='text-3xl font-bold text-center'>{chapterData.story}</p>
                    <p className='text-2xl font-bold text-center my-2'>{chapterData.chapter.title}</p>

                    <p className='my-4'>
                        <ReactMarkdown>{chapterData.chapter.content}</ReactMarkdown>
                    </p>

                    <div className="flex justify-center mt-4">
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
                            onClick={goToPreviousChapter}
                            disabled={chapterData.chapter.order === 1}
                        >
                            Chương trước
                        </button>
                        <select
                            className="mx-4 p-2 border border-gray-300 rounded"
                            onChange={handleChapterChange}
                            value={`chuong-${chapterData.chapter.order}`} // Đảm bảo chọn đúng giá trị chương hiện tại
                        >
                            {chapterOptions.map((chapter) => (
                                <option key={chapter} value={`chuong-${chapter}`}>
                                    Chương {chapter}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={goToNextChapter}
                            className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
                            disabled={chapterData.chapter.order === totalChapters}
                        >
                            Chương sau
                        </button>
                    </div>

                </div>
            ) : (
                <p>Không tìm thấy dữ liệu chương.</p>
            )}
        </div>
    );
};

export default ChapterDetail;
