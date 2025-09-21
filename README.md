# Rezide LinkedIn-like Post

A modern LinkedIn-style post webpage for Rezide, a real estate discovery platform.

## Features

- ✅ **LinkedIn-style post layout** with professional design
- ✅ **Real estate platform branding** with custom Rezide logo
- ✅ **Image grid layout** with one large and three smaller images
- ✅ **Like functionality** with MongoDB database integration
- ✅ **Share functionality** with clipboard copy
- ✅ **Responsive design** that works on all devices
- ✅ **Real-time like counter** stored in MongoDB

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/
│   ├── api/like/route.ts    # API endpoint for like functionality
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Header.tsx           # Header with Rezide logo
│   ├── Footer.tsx           # Footer with branding
│   └── LinkedInPost.tsx     # Main post component
├── lib/
│   └── mongodb.ts           # MongoDB connection
├── models/
│   └── Like.ts              # Like model for database
└── public/images/           # Project images
    ├── rezide-logo.png      # Rezide logo
    ├── presentation.jpg     # Main presentation image
    ├── workshop.jpg         # Workshop image
    └── event.jpg            # Event image
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up MongoDB**:
   - Update the MongoDB connection string in `lib/mongodb.ts`
   - The app uses: `mongodb+srv://aryansingh165548_db_user:kleigs15@cluster0.va2am7e.mongodb.net/`

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features in Detail

### Like Functionality
- Click the heart icon to like the post
- Likes are stored in MongoDB database
- Real-time counter updates
- Persistent across page refreshes

### Share Functionality
- Click the share button to copy the page URL
- Shows "Hurray! Link copied to clipboard" message
- Works on all modern browsers

### Image Grid
- One large image (presentation.jpg) takes up 2x2 grid space
- Two smaller images (workshop.jpg, event.jpg) in 1x1 grid spaces
- Responsive design adapts to different screen sizes

## MongoDB Schema

The app uses a simple Like model:

```typescript
{
  imageId: String,    // Post identifier
  count: Number,      // Number of likes
  lastLiked: Date     // Last like timestamp
}
```

## Deployment

This project is ready for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables if needed
4. Deploy!

## About Rezide

Rezide is a modern real estate discovery platform designed to make property search simple, transparent, and hassle-free. Whether you're looking to buy, sell, or rent, Rezide brings together verified listings, rich property details, and an intuitive search experience to help you make confident decisions.

---

Built with ❤️ using Next.js and MongoDB