import { Schema, model, models } from 'mongoose'

const chapterSchema = new Schema({
    title: String,
    content: String,
    order: Number
}, { _id: false })

const storySchema = new Schema({
    title: String,
    author: String,
    slug: String,
    genre: [String],
    publishedDate: Date,
    coverImage: String,
    description: String,
    chapters: [chapterSchema],
    reviews: [{
        userId: String,
        rating: Number,
        comment: String
    }],
    tags: [String],
    status: String
})


const Story = models.Story || model('Story', storySchema)

export default Story
