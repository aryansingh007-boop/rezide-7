# 🖼️ Image Structure Documentation

## 📁 **Current Image Organization**

```
public/
└── images/
    └── rezide/                    # Organized Rezide images
        ├── logo.png              # Rezide logo (header, footer, post)
        ├── presentation.jpg      # Main large image in post
        ├── workshop.jpg          # Small image 1 in post
        ├── event.jpg             # Small image 2 in post
        └── additional.jpg        # Backup image
```

## 🔧 **Image Usage in Code**

### **Image Paths:**
- **Logo**: `/images/rezide/logo.png`
- **Presentation**: `/images/rezide/presentation.jpg`
- **Workshop**: `/images/rezide/workshop.jpg`
- **Event**: `/images/rezide/event.jpg`
- **Additional**: `/images/rezide/additional.jpg`

### **Code References:**
All images are managed through `lib/images.ts`:
```typescript
export const images = {
  logo: '/images/rezide/logo.png',
  presentation: '/images/rezide/presentation.jpg',
  workshop: '/images/rezide/workshop.jpg',
  event: '/images/rezide/event.jpg',
  additional: '/images/rezide/additional.jpg',
}
```

## ✅ **Verification Commands**

```bash
# Check if all images are present
npm run verify-images

# Test the build
npm run build

# Start development server
npm run dev
```

## 🚀 **Deployment Ready**

### **For Vercel:**
- ✅ Images are in `public/images/rezide/`
- ✅ Paths are absolute (`/images/rezide/...`)
- ✅ Fallback images are configured
- ✅ Error handling is implemented

### **For GitHub:**
- ✅ All images are included in repository
- ✅ No external dependencies
- ✅ Consistent naming convention

## 🔄 **Image Updates**

To update images:
1. Replace files in `public/images/rezide/`
2. Keep the same filenames
3. Run `npm run verify-images` to check
4. Test with `npm run dev`

## 📋 **Image Specifications**

- **Logo**: PNG format, square aspect ratio
- **Presentation**: JPG format, landscape orientation
- **Workshop/Event**: JPG format, square aspect ratio
- **All images**: Optimized for web (compressed)

---

**Status: ✅ Ready for deployment with proper image structure!**
