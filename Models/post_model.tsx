import { model, models, Schema } from "mongoose";

const postSchema = new Schema({
    title: String,
    description: String,
    image: String
}, { toJSON: { virtuals: true } });

postSchema.virtual('desc').get(function () {
    return this.description?.substring(0, 7) + "...";
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;