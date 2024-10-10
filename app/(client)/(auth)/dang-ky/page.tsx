
"use client"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const FormSchema = z
    .object({
        email: z.string().min(1, "Không được để trống email!").email("Email không hợp lệ!"),
        username: z
            .string()
            .min(2, "Không được để trống tên!")
            .max(15, "Tên không vượt quá 15 ký tự!"),
        password: z
            .string()
            .min(1, "Không để trống mật khẩu!")
            .min(8, "Mật khẩu phải có đủ 8 ký tự!"),
        confirmPassword: z.string().min(1, "Hãy xác nhận mật khẩu!")
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Mật khẩu không trùng nhau!"
    })

const Signup = () => {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: values.username,
                email: values.email,
                password: values.password,
            }),
        })

        if (response.ok) {
            router.push("/dang-nhap")
        } else {
            toast({
                title: "Error",
                description: "Oops! Something went wrong!",
            })
        }
    }

    return (
        <div className="max-w-[500px] mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-96 space-y-6">
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="hometuryen@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Home Truyện" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Vui lòng nhập mật khẩu"
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Vui lòng nhập lại mật khẩu"
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button className="w-full mt-6" type="submit">
                        Đăng ký
                    </Button>
                </form>
                <p className="text-center text-md text-gray-600 mt-5">
                    Bạn đã có tài khoản?
                    <Link className="text-blue-500 hover:underline ml-1" href="/dang-nhap">
                        Đăng nhập
                    </Link>
                </p>
            </Form>
        </div>
    )
}

export default Signup
