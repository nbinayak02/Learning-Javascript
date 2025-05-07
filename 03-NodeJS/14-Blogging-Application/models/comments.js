const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "blogs",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
}, {timestamps: true});

const Comments = model("comments", commentSchema);

module.exports = Comments;