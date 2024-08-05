import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface Category {
  stt: number
  nameCategory: string
  isActive: boolean
}

interface TableProps {
  initCategories: Category[]
}

const TableItem: React.FC<TableProps> = ({ initCategories }) => {
  const [categories, setCategories] = useState<Category[]>(initCategories)

  const handleToggle = (stt: number) => {
    setCategories(prev =>
      prev.map(category =>
        category.stt === stt ? { ...category, isActive: !category.isActive } : category
      )
    )
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">STT</TableHead>
          <TableHead>Tên thể loại</TableHead>
          <TableHead>Trạng thái</TableHead>
          <TableHead className="text-right">Thay đổi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map(({ stt, nameCategory, isActive }) => (
          <TableRow key={stt}>
            <TableCell className="font-medium">{stt}</TableCell>
            <TableCell>{nameCategory}</TableCell>
            <TableCell><Switch checked={isActive} onCheckedChange={() => handleToggle(stt)} /></TableCell>
            <TableCell className="text-right">
              <Button className="mr-2 bg-teal-400 hover:bg-teal-300">Sửa</Button>
              <Button className="bg-red-500 hover:bg-red-300">Xóa</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableItem