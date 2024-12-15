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
import { getCategory, getStoriesNew } from '@/lib/api'
import { format, formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'
import Link from 'next/link'
export const StoriesNew = () => {
  const [stories, setStories] = React.useState<any[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [category, setCategory] = React.useState<any[]>([])
  React.useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getStoriesNew()
        setStories(data)
      } catch (err: any) {
        setError(err.message)
      }
    }
    const fetchCategory = async () => {
      try {
        const cate = await getCategory()
        setCategory(cate)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchStories()
    fetchCategory()
  }, [])
  const colors = ['#FFFFF', '#CCE5FF']
  return (
    <div className='md:flex block pt-10'>
      <div className='md:w-3/4 w-full'>
        <div className='md:flex block justify-between'>
          <span className="text-2xl font-bold text-black dark:text-white uppercase">
            Truyện mới cập nhật
          </span>
          <Button className='bg-yellow-50 hover:bg-yellow-200 text-black'>✨ Xem tất cả</Button>
        </div>
        <Table>
          <TableBody>
            {stories.map((stories, index) => (
              <TableRow key={stories.key} style={{ backgroundColor: colors[index % colors.length] }}>
                <Link href={`/${stories.slug}`}>
                  <TableCell className="hover:underline decoration-slice">{stories.title}</TableCell>
                </Link>
                <TableCell className="hidden md:table-cell"> {stories.genre.map((genre: any, index: number) => (
                  <span
                    key={index}
                    className="hover:underline decoration-slice mr-2"
                  >
                    {genre}
                  </span>
                ))}</TableCell>
                <TableCell className="hover:underline decoration-slice">{stories.latestChapter.title}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDistanceToNow(new Date(stories.publishedDate), { addSuffix: true, locale: vi })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='md:w-1/3 w-full'>
        <div className='mx-4'>
          <span className="text-2xl font-bold text-black dark:text-white uppercase">Thể loại</span>
          <div className="flex flex-wrap ">
            {category.map((cate) => (
              <div
                key={cate.id}
                className="m-2"

              ><Link href={`/the-loai/${cate.name}`}>
                  <Badge className='text-xs p-2'>{cate.name}</Badge>
                </Link>
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
