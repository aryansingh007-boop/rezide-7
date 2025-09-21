import mongoose, { Document, Schema } from 'mongoose'

export interface ILike extends Document {
  imageId: string
  count: number
  lastLiked: Date
  createdAt: Date
  updatedAt: Date
}

const LikeSchema: Schema = new Schema({
  imageId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  count: {
    type: Number,
    default: 0,
    min: 0
  },
  lastLiked: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Create index for better performance
LikeSchema.index({ imageId: 1 })

export default mongoose.models.Like || mongoose.model<ILike>('Like', LikeSchema)
