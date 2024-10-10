import mongoose, { Schema, model, models } from 'mongoose'
import bcrypt from 'bcryptjs'
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, default: 'reader' },
    avatar: { type: String, default: 'no-img.jpg' },
    createdAt: { type: Date, default: Date.now }
})
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password as string, salt)
    this.password = hashedPassword
    next()
})
export default models.User || model('User', UserSchema)
