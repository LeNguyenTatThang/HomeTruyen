import { Button } from '@/components/ui/button'
import React from 'react'
import NumberTicker from "@/components/magicui/number-ticker"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AuthorPage = () => {
    return (
        <div className='w-full'>
            <p className='text-4xl uppercase font-sans'>Thống kê tổng quan</p>
            <div className='mx-auto bg-white text-black dark:bg-black dark:text-white flex justify-around my-5 p-5'>
                <Button className='bg-sky-400 hover:bg-sky-500'>Thêm truyện mới</Button>
                <Button className='bg-lime-400 hover:bg-lime-500'>Danh sách truyện</Button>
            </div>
            <div className='gap-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 flex-grow'>
                <div className='bg-white w-full h-36'>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white text-center pt-3">
                        <NumberTicker className='text-red-400' value={100} />
                    </p>
                    <p className='text-center text-xl mt-4'>Linh thạch</p>
                </div>
                <div className='bg-white w-full h-36'>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white text-center pt-3">
                        <NumberTicker className='text-green-400' value={400} />
                    </p>
                    <p className='text-center text-xl mt-4'>Lượt xem</p>
                </div>
                <div className='bg-white w-full h-36'>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white text-center pt-3">
                        <NumberTicker className='text-sky-400' value={80} />
                    </p>
                    <p className='text-center text-xl mt-4'>Truyện đã viết</p>
                </div>
                <div className='bg-white w-full h-36'>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white text-center pt-3">
                        <NumberTicker className='text-fuchsia-400' value={50} />
                    </p>
                    <p className='text-center text-xl mt-4'>Chương đã viết</p>
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full pt-10">
                <AccordionItem value="item-1" className='bg-cyan-200 px-2'>
                    <AccordionTrigger>Home Truyện với lời nhắc nhở?</AccordionTrigger>
                    <AccordionContent>
                        <p>Truyện tình trạng hoàn thành sẽ không thể điều chỉnh sang tình trạng khác, nếu muốn thay đổi liên hệ Admin!</p>
                        <p>Đẩy truyện lên trang chủ 10 Linh thạch/lần đối với truyện đã Full</p>
                        <p>Truyện đăng duy nhất tại Home Truyện mới được vào danh sách chọn lọc.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='bg-red-200 px-2 my-4'>
                    <AccordionTrigger >Home Truyện với đôi lời cân nhắc?</AccordionTrigger>
                    <AccordionContent>
                        <p>Home Truyện khuyến cáo chỉ nên đăng truyện tại Home Truyện để tránh tình trạng truyện bị sao chép trái phép!</p>
                        <p>Chế độ hẹn lịch đăng sử dụng duy nhất với truyện đăng độc quyền, liên hệ Telegram góc trái màn hình!</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='bg-emerald-200 px-2'>
                    <AccordionTrigger>Home Truyện với lưu ý?</AccordionTrigger>
                    <AccordionContent>
                        <p>- Tác giả/dịch giả/Converter được phép đăng truyện và kêu gọi độc giả ủng hộ linh thạch.</p>
                        <p>- Phải có tối thiểu 15.000 lượt đọc và trên 15 chap mới được phép bật tính năng nhận ủng hộ từ độc giả.</p>
                        <p>- Khi đủ số dư trên 40,000 linh thạch (tương đương 2.000.000đ) có quyền đổi linh thạch ra tiền.</p>
                        <p>- Khi bạn có đủ 50 chap thì bạn có thể set ủng hộ bắt buộc từ chap 51 trở đi.</p>
                        <p>- Home Truyện luôn nhận ý kiến đóng góp xây dựng, hoàn thiện qua email: hometruyen@gmail.com</p>
                        <p>- Lưu ý: nếu bạn là tác giả truyện đã có trên Dtruyen.com vui lòng gửi mail đến: hometruyen@gmail.com để được set là chủ sở hữu truyện và chỉ cần tiếp tục đăng chương.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AuthorPage