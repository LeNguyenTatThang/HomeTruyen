import React, { forwardRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    id: string
    placeholder: string
    type: string
}

const InputItem = forwardRef<HTMLInputElement, InputProps>(({ label, id, placeholder, type, ...props }, ref) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={id}>{label}</Label>
        <Input className="mt-2" type={type} id={id} placeholder={placeholder} ref={ref} {...props} />
    </div>
))

InputItem.displayName = 'InputItem'

export default InputItem
