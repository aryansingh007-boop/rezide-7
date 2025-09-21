import { NextRequest, NextResponse } from 'next/server'
import connectDB from '../../../lib/mongodb'
import Like from '../../../models/Like'

export async function POST(request: NextRequest) {
  try {
    console.log('🔵 Like API called at:', new Date().toISOString())
    
    const { imageId, postId } = await request.json()
    console.log('📝 Request data:', { imageId, postId })

    const id = postId || imageId

    if (!id) {
      console.log('❌ No ID provided')
      return NextResponse.json(
        { error: 'Post ID or Image ID is required' },
        { status: 400 }
      )
    }

    console.log('🔌 Connecting to MongoDB...')
    // Connect to MongoDB
    await connectDB()
    console.log('✅ MongoDB connected successfully')

    // Find existing like record
    let likeRecord = await Like.findOne({ imageId: id })
    console.log('🔍 Existing record:', likeRecord ? 'Found' : 'Not found')

    if (likeRecord) {
      // Update existing record
      likeRecord.count += 1
      likeRecord.lastLiked = new Date()
      await likeRecord.save()
      console.log('📈 Updated existing record')
    } else {
      // Create new record
      likeRecord = new Like({
        imageId: id,
        count: 1,
        lastLiked: new Date()
      })
      await likeRecord.save()
      console.log('🆕 Created new record')
    }

    // Log the like action (this is the backend message capture)
    console.log(`❤️ Like recorded for post: ${id} at ${new Date().toISOString()}`)
    console.log(`📊 Total likes for ${id}: ${likeRecord.count}`)

    return NextResponse.json({
      success: true,
      postId: id,
      likes: likeRecord.count,
      message: `Like recorded for post ${id}`
    })

  } catch (error) {
    console.error('❌ Error processing like:', error)
    console.error('❌ Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    console.log('🔵 GET Like API called at:', new Date().toISOString())
    
    const { searchParams } = new URL(request.url)
    const imageId = searchParams.get('imageId')
    const postId = searchParams.get('postId')
    
    console.log('📝 GET Request params:', { imageId, postId })

    console.log('🔌 Connecting to MongoDB...')
    // Connect to MongoDB
    await connectDB()
    console.log('✅ MongoDB connected successfully')

    const id = postId || imageId

    if (id) {
      // Get likes for specific post/image
      const likeRecord = await Like.findOne({ imageId: id })
      console.log('🔍 Found record for', id, ':', likeRecord ? likeRecord.count : 0, 'likes')
      
      return NextResponse.json({
        postId: id,
        likes: likeRecord ? likeRecord.count : 0
      })
    } else {
      // Get all likes
      const allLikes = await Like.find({})
      console.log('📊 All likes:', allLikes.length, 'records')
      
      return NextResponse.json({
        likes: allLikes
      })
    }

  } catch (error) {
    console.error('❌ Error fetching likes:', error)
    console.error('❌ Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
