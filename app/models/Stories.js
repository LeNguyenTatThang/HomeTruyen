const mongoose = require('mongoose');
const { Schema } = mongoose;

const storySchema = new Schema({
    name: { type: String, required: true },
})

const Story = mongoose.models.Story || mongoose.model('stories', storySchema)

module.exports = Story
