import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import FacebookPagePlugin from './Facebook'
import DiscordChatWidget from './Discord'
import { Button } from '@/components/ui/button'
export const StoriesNew = () => {
  const stories = [
    {
      key: 1,
      nameStory: "Sủng Chứng",
      author: "Mộc Vũ Nguyện",
      genres: ["Ngôn Tình", "Ngược"],
      chapter: "Chương 91",
      updated: "20 phút trước"
    },
    {
      key: 2,
      nameStory: "Dấu Son Màu Hồng",
      author: "Lạc Nhật Bất Vãn",
      genres: ["Ngôn Tình", "Sủng"],
      chapter: "Chương 6",
      updated: "1 giờ trước"
    },
    {
      key: 3,
      nameStory: "Xuyên Không, Tôi Trở Thành Quản Lí Vàng Trong Làng Showbiz",
      author: "",
      genres: ["Ngôn Tình", "Dị Năng"],
      chapter: "Chương 55",
      updated: "2 giờ trước"
    },
    {
      key: 4,
      nameStory: "Giang Vũ Phi Phi",
      author: "",
      genres: ["Ngôn Tình", "Sủng"],
      chapter: "Chương 13",
      updated: "2 giờ trước"
    },
    {
      key: 5,
      nameStory: "Đồ Đệ Xuống Núi Vô Địch Thiên Hạ",
      author: "",
      genres: ["Đô Thị", "Huyền Huyễn"],
      chapter: "Chương 2400",
      updated: "5 giờ trước"
    },
    {
      key: 6,
      nameStory: "Khác Biệt Giống Loài Làm Sao Yêu Đương",
      author: "",
      genres: ["Linh Dị", "Đam Mỹ"],
      chapter: "Chương 33",
      updated: "5 giờ trước"
    },
    {
      key: 7,
      nameStory: "Sau Khi Cùng Xuyên Bị Đối Thủ Sống Còn Bám Dính",
      author: "",
      genres: ["Đam Mỹ", "Hệ Thống"],
      chapter: "Chương 31",
      updated: "5 giờ trước"
    },
    {
      key: 8,
      nameStory: "Luyến Ái Nhân Thiết",
      author: "Yểm Sơn",
      genres: ["Sắc", "Đam Mỹ"],
      chapter: "Chương 17",
      updated: "5 giờ trước"
    },
    {
      key: 9,
      nameStory: "Honey",
      author: "Thiên Thập Cửu",
      genres: ["Sắc", "Đam Mỹ"],
      chapter: "Chương 25",
      updated: "5 giờ trước"
    },
    {
      key: 10,
      nameStory: "Kiều Đồng",
      author: "Na Sát Thời Quang",
      genres: ["Ngôn Tình", "Cổ Đại"],
      chapter: "Chương 12",
      updated: "5 giờ trước"
    },
    {
      key: 11,
      nameStory: "Vì Run Tay Nên Cộng Hết Điểm Vào Sắc Đẹp Rồi",
      author: "",
      genres: ["Huyền Huyễn", "Đam Mỹ"],
      chapter: "Chương 100",
      updated: "5 giờ trước"
    },
    {
      key: 12,
      nameStory: "Xuyên Nhanh: Đại Lão Phản Diện Là Ngọc Thụy Của Ta",
      author: "",
      genres: ["Ngôn Tình", "Hệ Thống"],
      chapter: "Chương 40",
      updated: "6 giờ trước"
    },
    {
      key: 13,
      nameStory: "May Mắn Bên Nhau Ở Kiếp Này",
      author: "Hoa Hoa Liễu",
      genres: ["Ngôn Tình", "Trọng Sinh"],
      chapter: "Chương 41",
      updated: "6 giờ trước"
    },
    {
      key: 14,
      nameStory: "Thoát Khỏi Bụi Gai",
      author: "Tứ Nghi",
      genres: ["Ngôn Tình", "Ngược"],
      chapter: "Chương 50",
      updated: "6 giờ trước"
    },
    {
      key: 15,
      nameStory: "Sương Mờ Trên Đảo Hồng Kông",
      author: "Mộc Lê Đăng",
      genres: ["Ngôn Tình", "Sủng"],
      chapter: "Chương 79",
      updated: "6 giờ trước"
    },
    {
      key: 16,
      nameStory: "Trọng Sinh Quật Khởi Hương Giang",
      author: "Tấn Thiết",
      genres: ["Đô Thị", "Trọng Sinh"],
      chapter: "Chương 100",
      updated: "7 giờ trước"
    },
    {
      key: 17,
      nameStory: "Rắp Tâm Chiếm Đoạt",
      author: "Nhược Linh",
      genres: ["Ngôn Tình", "Sắc"],
      chapter: "Chương 70",
      updated: "7 giờ trước"
    },
    {
      key: 18,
      nameStory: "Đạo Sĩ Ta, Bị Nữ Quỷ Điên Cuồng Tranh Đoạt",
      author: "",
      genres: ["Tiên Hiệp", "Huyền Huyễn"],
      chapter: "Chương 79",
      updated: "7 giờ trước"
    },
    {
      key: 19,
      nameStory: "Anh Thất Hứa Rồi",
      author: "Thập Thanh Yểu",
      genres: ["Ngôn Tình", "Ngược"],
      chapter: "Chương 33",
      updated: "7 giờ trước"
    },
    {
      key: 20,
      nameStory: "Có Một Lá Thư Gửi Từ Hồng Kông",
      author: "",
      genres: ["Ngôn Tình", "Ngược"],
      chapter: "Chương 146",
      updated: "7 giờ trước"
    },
    {
      key: 21,
      nameStory: "Khói Thuốc",
      author: "Quỳ Thập Nguyệt",
      genres: ["Ngôn Tình", "Đô Thị"],
      chapter: "Chương 66",
      updated: "7 giờ trước"
    },
    {
      key: 22,
      nameStory: "Phiêu Miểu 3 - Quyển Thiên Chỉ",
      author: "",
      genres: ["Linh Dị", "Cổ Đại"],
      chapter: "Chương 41",
      updated: "8 giờ trước"
    },
    {
      key: 23,
      nameStory: "Phiêu Miểu 2 - Quyển Mặt Quỷ",
      author: "",
      genres: ["Linh Dị", "Cổ Đại"],
      chapter: "Chương 42",
      updated: "8 giờ trước"
    },
    {
      key: 24,
      nameStory: "Cẩn Thận Động Thai",
      author: "Mộc Thê An",
      genres: ["Ngôn Tình", "Đô Thị"],
      chapter: "Chương 111",
      updated: "9 giờ trước"
    },
    {
      key: 25,
      nameStory: "Cẩn Thận Động Thai",
      author: "Mộc Thê An",
      genres: ["Ngôn Tình", "Đô Thị"],
      chapter: "Chương 111",
      updated: "9 giờ trước"
    },
    {
      key: 26,
      nameStory: "Cẩn Thận Động Thai",
      author: "Mộc Thê An",
      genres: ["Ngôn Tình", "Đô Thị"],
      chapter: "Chương 111",
      updated: "9 giờ trước"
    }
  ]
  const category = [
    { id: "f936b93e-2c96-4d44-9d8d-2cb1bf7cf0c5", genre: "Tiên Hiệp" },
    { id: "5cea5780-c864-456b-ab3c-cdcf12bbdf5a", genre: "Kiếm Hiệp" },
    { id: "17be1337-2186-452f-8a4c-288a80248864", genre: "Ngôn Tình" },
    { id: "db8641fc-4fc3-496b-8703-910a398d7596", genre: "Đam Mỹ" },
    { id: "2686c4dd-0833-4ddd-8622-b61a1972d1f6", genre: "Quan Trường" },
    { id: "e3782162-c7da-4348-98b5-98fc3304e80d", genre: "Võng Du" },
    { id: "acb40497-9112-4ebc-8f37-b3b25e77f546", genre: "Khoa Huyễn" },
    { id: "c32be472-6881-4094-9860-0c448e513917", genre: "Hệ Thống" },
    { id: "72e8c255-fd15-4d7d-b36f-03a560fd0328", genre: "Huyền Huyễn" },
    { id: "6c8b58d8-332e-4b79-99a8-6d3e173a7a06", genre: "Dị Giới" },
    { id: "1284f15c-882d-4dff-9185-95c423ecec05", genre: "Dị Năng" },
    { id: "5f698059-dcd4-4d17-95dc-512e60ddb468", genre: "Quân Sự" },
    { id: "73e58009-ef94-45f1-9907-8387181e3aca", genre: "Lịch Sử" },
    { id: "5ac258a3-d634-4a66-8628-bbae080e044d", genre: "Xuyên Không" },
    { id: "384d6ad4-1458-4e4e-a397-ecbce68b353e", genre: "Xuyên Nhanh" },
    { id: "26d69ae0-9f5e-4fef-ac59-012f2ad28d49", genre: "Trọng Sinh" },
    { id: "cccadbe7-28b0-4509-a83a-324ec4552239", genre: "Trinh Thám" },
    { id: "f6debed7-de4c-47aa-9ec7-2876ba8c6954", genre: "Thám Hiểm" },
    { id: "7b958eaf-c6b7-4c9a-bd98-a3bb1bb869d7", genre: "Linh Dị" },
    { id: "60605f2e-dade-4bf5-9175-8fce36dc4f32", genre: "Ngược" },
    { id: "e794d7c1-1586-4e04-b9de-e15d576ce860", genre: "Sủng" },
    { id: "c524e3f4-7d33-4466-967a-eae4199de2de", genre: "Cung Đấu" },
    { id: "6e5422dc-6195-4527-b35d-7fb4e05aab87", genre: "Nữ Cường" },
    { id: "80fb5b40-9f0c-43b1-adff-78b19fdc6e50", genre: "Gia Đấu" },
    { id: "4a208e2d-7e58-44aa-a1de-64b36ca2d48a", genre: "Đông Phương" },
    { id: "4982ae37-1bd8-4749-8c3c-a717979c47d2", genre: "Đô Thị" },
    { id: "531072e9-9950-4845-bdef-4365725e5d36", genre: "Bách Hợp" },
    { id: "097ecc22-4dc7-4632-98d4-1abf80e5f56d", genre: "Hài Hước" },
    { id: "3727def1-284f-4a35-9596-bcedf353dc90", genre: "Điền Văn" },
    { id: "181ae2c9-ff31-4231-a87f-b34bc933a4af", genre: "Cổ Đại" },
    { id: "3272c1bd-f03e-4773-89c6-83de7a868997", genre: "Mạt Thế" },
    { id: "fb9279ec-1e42-4d94-9c23-d9ea0473e8cd", genre: "Truyện Teen" },
    { id: "39e000c4-8924-4b75-a72d-02ce44783138", genre: "Phương Tây" },
    { id: "480250ed-0670-4585-9b3b-3bb495f785d6", genre: "Nữ Phụ" },
    { id: "f458ddb8-cf47-4ac5-bb9f-0c904ffe6260", genre: "Light Novel" },
    { id: "03a1de7a-76d0-4c21-b0fa-30e79d4209cb", genre: "Việt Nam" },
    { id: "7e2d0c0f-04e8-44f3-a022-e0f7b24e79fb", genre: "Đoản Văn" },
    { id: "18510cfd-33fc-4668-821e-d0484f63017c", genre: "Khác" }
  ]
  const colors = ['#FFFFF', '#CCE5FF']
  return (
    <div className='flex pt-10'>
      <div>
        <div className='flex justify-between'>
          <span className="text-2xl font-bold text-black dark:text-white uppercase">
            Truyện mới cập nhật
          </span>
          <Button className='bg-yellow-50 hover:bg-yellow-200 text-black'>✨ Xem tất cả</Button>
        </div>
        <Table>
          <TableBody>
            {stories.map((stories, index) => (
              <TableRow key={stories.key} style={{ backgroundColor: colors[index % colors.length] }}>
                <TableCell className="hover:underline decoration-slice">{stories.nameStory}</TableCell>
                <TableCell className="hover:underline decoration-slice">{stories.author}</TableCell>
                <TableCell > {stories.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="hover:underline decoration-slice mr-2"
                  >
                    {genre}
                  </span>
                ))}</TableCell>
                <TableCell className="hover:underline decoration-slice">{stories.chapter}</TableCell>
                <TableCell>{stories.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='w-1/4'>
        <div className='mx-4'>
          <span className="text-2xl font-bold text-black dark:text-white uppercase">Thể loại</span>
          <div className="flex flex-wrap ">
            {category.map((cate) => (
              <div
                key={cate.id}
                className="m-2"

              >
                <Badge className='text-xs p-2'>{cate.genre}</Badge>
              </div>
            ))}
          </div>
        </div>

        <DiscordChatWidget />
        <FacebookPagePlugin />
      </div>
    </div>

  )
}
