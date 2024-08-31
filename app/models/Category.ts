import mongoose, { Schema, Document, Model } from 'mongoose';

// Định nghĩa interface cho Category
export interface ICategory extends Document {
    name: string;
    status: string;
}

// Tạo Schema cho Category
const CategorySchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['on', 'off'],
        default: 'on',
    },
});

// Tạo và xuất mô hình Category
const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
export default Category;
