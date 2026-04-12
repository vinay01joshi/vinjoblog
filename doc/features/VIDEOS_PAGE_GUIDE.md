# Videos Page Implementation Guide

## ✅ What Was Added

### 1. **New Videos Page** (`videos.markdown`)

- Located at `/videos/` on your site
- Responsive grid layout (auto-adjusts columns for mobile)
- Video cards with YouTube embeds
- Each card displays:
  - Embedded YouTube video (responsive, maintains 16:9 aspect ratio)
  - Video title
  - Publication date
  - Description
  - Category (optional)

### 2. **Videos Data File** (`_data/videos.yml`)

- YAML file for managing your videos
- Easy to add/edit/remove videos without touching the page template
- Each video entry includes:
  - `title`: Video title
  - `youtube_id`: YouTube video ID (from the URL)
  - `date`: Publication date (YYYY-MM-DD format)
  - `description`: Brief description
  - `category`: Video topic/category (optional)

## 🎯 How to Use

### Adding a New Video

Edit `_data/videos.yml` and add a new entry:

```yaml
- title: "Your Video Title"
  youtube_id: "abc123defg"
  date: 2026-04-12
  description: "Describe what this video is about"
  category: "AI & Development"
```

**To find the YouTube ID:**

- Go to your video on YouTube
- URL format: `https://www.youtube.com/watch?v=**YOUTUBE_ID**`
- Copy the ID after `v=`

### Editing Existing Videos

Simply modify the entry in `_data/videos.yml` and save. Jekyll will automatically regenerate the page.

### Removing Videos

Delete the entire video entry from `_data/videos.yml`.

## 🎨 Styling Features

The Videos page includes:

- **Responsive Grid Layout**: 2 columns on desktop, 1 on mobile
- **Hover Effects**: Card shadow increases on hover
- **Aspect Ratio Locked**: Videos maintain 16:9 ratio automatically
- **Mobile Optimized**: Adapts to all screen sizes

## 📱 Navigation Integration

The Videos link will automatically appear in your site navigation (Minima theme handles this). To ensure it shows up:

1. The page has `permalink: /videos/` - makes it accessible at `/videos/`
2. Minima theme automatically includes it in the header menu

## 🚀 Next Steps

1. **Add your YouTube videos** to `_data/videos.yml`
2. **Test locally**: Run `bundle exec jekyll serve` to see it locally at `http://localhost:4000/videos/`
3. **Commit and push**: Add these files to git and push to deploy

```bash
git add videos.markdown _data/videos.yml
git commit -m "Add Videos page with YouTube integration"
git push origin main
```

## 📝 Example Videos Already Included

The `_data/videos.yml` file comes with 3 sample videos that you should replace with your actual YouTube videos.

## 🔧 Customization

### Change Grid Columns

Edit the `grid-template-columns` in the CSS within `videos.markdown`:

```css
grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
```

- Decrease `500px` to show more columns
- Increase `500px` to show fewer columns

### Change Video Card Height

The `padding-bottom: 56.25%` maintains 16:9 ratio. To change:

- 4:3 ratio: `padding-bottom: 75%`
- Square: `padding-bottom: 100%`

## ✨ Features Summary

| Feature                 | Status |
| ----------------------- | ------ |
| YouTube Video Embedding | ✅     |
| Responsive Grid Layout  | ✅     |
| Video Descriptions      | ✅     |
| Categories/Tags         | ✅     |
| Mobile Optimized        | ✅     |
| Easy Data Management    | ✅     |
| Automatic Navigation    | ✅     |

---

**Need to add the Archive page next?** See `doc/features/navigation.md` for the Archive page specifications.
