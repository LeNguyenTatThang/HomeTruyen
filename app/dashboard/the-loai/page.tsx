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

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    console.log("Form submitted with values:", values)
    try {
      const response = await fetch('/api/admin/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.theloai
        })
      })

      const data = await response.json();

      if (response.ok) {
        console.log("Category added successfully:", data)
      } else {
        console.error("Error adding category:", data.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <>
      <div className="w-full mx-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full bg-lime-200 hover:bg-lime-400">Thêm thể loại</Button>
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
        <TableItem />
      </div>
    </>

  )
}

export default Category
