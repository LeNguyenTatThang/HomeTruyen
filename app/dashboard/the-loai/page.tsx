"use client"
import { z } from "zod"
import React from "react"
import Input from "../components/input"
import TableItem from "../components/table"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const schema = z.object({
  theloai: z.string().min(1, "Vui lòng nhập tên thể loại")
})

type FormData = {
  theloai: string
}
const Category = () => {

  const { formState, handleSubmit, register } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log("Form submitted with values:", values)
  }

  const categories = [
    { stt: 1, nameCategory: "Huyền huyễn", isActive: true },
    { stt: 2, nameCategory: "Khoa học viễn tưởng", isActive: true },
    { stt: 3, nameCategory: "Lãng mạn", isActive: false },
    { stt: 4, nameCategory: "Hài hước", isActive: true },
    { stt: 5, nameCategory: "Hành động", isActive: false },
  ]
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Thêm thể loại</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thêm thể loại mới</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Tên thể loại"
              placeholder="Nhập tên thể loại..."
              id="theloai"
              type="text"
              {...register("theloai")}
            />
            {formState.errors.theloai && (
              <div className="text-red-500">{formState.errors.theloai.message}</div>
            )}
            <Button className="w-40 mt-2" type="submit">
              Thêm
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <TableItem initCategories={categories} />
    </>

  )
}

export default Category
