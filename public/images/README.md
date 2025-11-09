# Image Assets for William Kennedy's Portfolio

## Supported Image Formats
- **JPG/JPEG** - Best for photos and complex images
- **PNG** - Best for images with transparency or simple graphics
- **WebP** - Modern format with excellent compression
- **SVG** - Best for logos and simple vector graphics

## Image Directories

### Project Images
Place your project screenshots/images in this directory with these naming conventions:
- `project-1.jpg` - NEPA AI Platform screenshot
- `project-2.jpg` - 3D Architectural Visualization
- `project-3.jpg` - Content Automation Suite
- `project-4.jpg` - Interactive Game Environment

### Profile Images (Optional)
- `profile.jpg` - Your professional headshot
- `hero-bg.jpg` - Custom hero section background

## Recommended Image Sizes
- **Project Images**: 1200x800px (3:2 aspect ratio)
- **Profile Photo**: 400x400px (square)
- **Hero Background**: 1920x1080px (16:9 aspect ratio)

## How to Add Your Images

1. **Add project images**: Drop your project screenshots into `/public/images/`
2. **Update image references**: Modify `/src/lib/placeholder-images.json` to point to your local images
3. **Replace URLs**: Change from Unsplash URLs to `/images/your-image.jpg`

## Example Update for Local Images
In `src/lib/placeholder-images.json`, change:
```json
{
  "id": "project-1",
  "imageUrl": "https://images.unsplash.com/...",
  "description": "Screenshot of NEPA AI Platform"
}
```

To:
```json
{
  "id": "project-1", 
  "imageUrl": "/images/project-1.jpg",
  "description": "Screenshot of NEPA AI Platform"
}
```

This will load your local images instead of placeholder images from Unsplash.