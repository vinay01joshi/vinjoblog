# 🚀 Running the Blog Locally

## ✅ Prerequisites

- Ruby 3.1+ (we used 3.1.6)
- Bundler
- Git

## 📋 Quick Start

### Step 1: Clone/Navigate to the Project

```bash
cd /Users/vinay/source/projects/vinjoblog
```

### Step 2: Ensure Correct Ruby Version

```bash
rbenv local 3.1.6
ruby --version  # Should show Ruby 3.1.6
```

### Step 3: Install Dependencies

```bash
bundle install
```

### Step 4: Start the Development Server

```bash
bundle exec jekyll serve
```

The server will start at: **http://127.0.0.1:4000/**

## 🌐 Access Your Blog Locally

Once the server is running, open your browser and visit:

- **Home**: http://127.0.0.1:4000/
- **About**: http://127.0.0.1:4000/about/
- **Videos** (NEW): http://127.0.0.1:4000/videos/
- **Blog Posts**: http://127.0.0.1:4000/ (on home page)

## 🔄 Live Reload

The development server has **auto-regeneration** enabled:

- Edit any Markdown file or data file
- Save it
- Refresh your browser
- Changes appear instantly!

## 📝 Testing the Videos Page

1. Navigate to: http://127.0.0.1:4000/videos/
2. You should see:
   - 3 sample videos with YouTube embeds
   - Responsive grid layout
   - Video titles, dates, descriptions, and categories

### Update Videos

Edit `_data/videos.yml`:

```yaml
- title: "Your Video Title"
  youtube_id: "VIDEO_ID_HERE"
  date: 2026-04-12
  description: "Your description"
  category: "Category"
```

Save the file → Refresh browser → See changes instantly!

## 🛑 Stop the Server

Press `Ctrl+C` in the terminal where jekyll serve is running.

## 📊 Project Structure

```
/Users/vinay/source/projects/vinjoblog/
├── _posts/              ← Blog articles
├── _data/               ← Data files (videos.yml, etc)
├── _site/               ← Generated HTML (don't edit)
├── assets/              ← CSS, JS, images
├── videos.markdown      ← Videos page
├── about.markdown       ← About page
├── index.markdown       ← Home page
├── _config.yml          ← Site configuration
└── Gemfile              ← Ruby dependencies
```

## 🔧 Troubleshooting

### Issue: Bundler version mismatch

```bash
rbenv local 3.1.6
bundle install
```

### Issue: Port 4000 already in use

```bash
bundle exec jekyll serve --port 4001
```

Then visit: http://127.0.0.1:4001/

### Issue: Files not updating

- Make sure auto-regeneration is enabled (it is by default)
- Try hard-refreshing browser: `Cmd+Shift+R` (Mac)

## 📚 Useful Commands

```bash
# Build static site (without running server)
bundle exec jekyll build

# Clean build (remove _site folder first)
bundle exec jekyll clean && bundle exec jekyll build

# Serve with incremental builds (faster)
bundle exec jekyll serve --incremental

# Serve on a custom port
bundle exec jekyll serve --port 3000
```

## ✨ Current Features

- ✅ Blog posts with categories
- ✅ About page
- ✅ Videos page (NEW!)
- ✅ RSS feed (jekyll-feed plugin)
- ✅ Responsive Minima theme
- ✅ Live reload

---

**Next Steps:**

1. Test the Videos page at http://127.0.0.1:4000/videos/
2. Add your own YouTube videos to `_data/videos.yml`
3. When ready to deploy, commit changes and push to GitHub (automatic deployment via GitHub Actions)
