# Project Structure Guide

## Overview

This Jekyll blog project has been reorganized into a scalable, maintainable structure suitable for 50+ blog posts with organized assets.

## Directory Structure

```
vinjoblog/
├── _posts/                           # Blog post markdown files (main content)
│   ├── 2026-03-18-ai-agent-*.md
│   ├── 2026-03-17-3d-printing-*.md
│   └── ...
│
├── pages/                            # Static pages (non-blog content)
│   ├── videos.md                     # Videos page (permalink: /videos/)
│   ├── about.md                      # About page (permalink: /about/)
│   └── ...
│
├── _drafts/                          # Work-in-progress posts (not published)
│   └── post-title.md                 # Use `jekyll serve --drafts` to preview
│
├── content/                          # Post-related media and resources
│   ├── posts/                        # Future: Per-post assets (organized by slug)
│   │   └── ai-agent-framework/
│   │       ├── diagram.png
│   │       └── guide.pdf
│   ├── images/
│   │   └── shared/                   # Centralized image storage (15+ images)
│   │       ├── banner_*.png
│   │       └── diagram_*.png
│   └── videos/                       # Video page resources
│       └── featured-videos.yml
│
├── _includes/                        # Reusable HTML components
│   ├── header.html                   # Navigation header (dark theme)
│   ├── footer.html                   # Footer (from minima theme)
│   └── components/                   # Future: Custom components
│       ├── post-card.html
│       └── gallery.html
│
├── _layouts/                         # Page templates
│   ├── default.html                  # Main layout wrapper
│   ├── post.html                     # Blog post styling (metadata, related posts)
│   └── page.html                     # Static page styling
│
├── _data/                            # Configuration data (YAML)
│   ├── navigation.yml                # Menu structure (future use)
│   ├── authors.yml                   # Author bios (future use)
│   └── videos.yml                    # Video list (used by videos page)
│
├── assets/                           # Static assets
│   ├── css/
│   │   ├── main.scss                 # Main stylesheet entry point
│   │   ├── navbar.scss               # Modern navbar styling
│   │   └── main.css                  # Compiled CSS
│   ├── js/
│   │   ├── theme-toggle.js           # Dark/light mode switching (localStorage)
│   │   └── search.js                 # Search and menu toggle functionality
│   └── images/                       # Future: Global images (icons, logo)
│
├── _config.yml                       # Jekyll configuration
│   ├── Post defaults: layout: post
│   ├── Page defaults: layout: page
│   └── Sass settings: compressed, quiet_deps
│
├── doc/                              # Project documentation
│   ├── STRUCTURE.md                  # This file
│   ├── LOCAL_SETUP.md                # Setup instructions
│   └── features/
│       ├── navigation.md             # Navigation component guide
│       └── VIDEOS_PAGE_GUIDE.md      # Videos page customization
│
└── README.md                         # Project overview
```

## File Types & Conventions

### Posts (`_posts/`)

- **Format**: Markdown (`.md` or `.markdown`)
- **Naming**: `YYYY-MM-DD-title-with-dashes.md`
- **Front matter**: Includes `title`, `date`, `categories`, `tags`, `layout: post`
- **Example**:

  ```markdown
  ---
  layout: post
  title: "How to Build an AI Agent"
  date: 2026-03-18 10:30:00 +0530
  categories: [ai, development]
  tags: [agents, python, framework]
  ---

  Post content here...
  ```

### Pages (`pages/`)

- **Format**: Markdown (`.md`)
- **Naming**: `page-title.md`
- **Front matter**: Includes `title`, `layout: page`, `permalink: /page-url/`
- **Example**:

  ```markdown
  ---
  layout: page
  title: Videos
  permalink: /videos/
  ---

  Page content here...
  ```

### Images (`content/images/shared/`)

- All images centralized in `content/images/shared/`
- Reference in posts: `/content/images/shared/image-name.png`
- Future: Move post-specific images to `content/posts/{post-slug}/images/`

## Key Features

### 1. Modern Navigation

- **File**: `_includes/header.html`
- **Styling**: `assets/css/navbar.scss` (dark theme)
- **Features**:
  - Brand name (left)
  - Navigation links (center)
  - Theme toggle + Search + Menu (right)
  - Mobile-responsive hamburger

### 2. Dark/Light Theme Toggle

- **Script**: `assets/js/theme-toggle.js`
- **Storage**: localStorage (persists across sessions)
- **Classes**: `.dark-mode`, `.light-mode` applied to `<html>` element

### 3. Post Layout

- **File**: `_layouts/post.html`
- **Features**: Title, date, categories, tags, related posts sidebar
- **Auto-applied**: All posts in `_posts/` use this layout (via `_config.yml`)

### 4. Image Organization

- **Old structure** (flat): `/images/banner_1.png`
- **New structure** (centralized): `/content/images/shared/banner_1.png`
- **All posts updated**: Image references automatically converted

## Common Tasks

### Add a New Blog Post

1. Create file in `_posts/`: `_posts/YYYY-MM-DD-title.md`
2. Add front matter (title, date, categories, tags)
3. Write content
4. Add images to `content/images/shared/` and reference them

### Add Images to a Post

1. Place image in `content/images/shared/`
2. Reference in post markdown:
   ```markdown
   ![Alt text](/content/images/shared/image-name.png)
   ```

### Preview Draft Posts

```bash
bundle exec jekyll serve --drafts
```

### Change Theme

- Click the theme toggle button in navbar (top-right)
- Theme preference saved to browser localStorage
- Persists across sessions

### Customize Navigation

- Edit `_includes/header.html` to add/remove menu items
- Update `_config.yml` defaults if changing post/page layouts

## Navigation URLs

| Page       | URL                                        | File                       |
| ---------- | ------------------------------------------ | -------------------------- |
| Home       | `/`                                        | `index.markdown`           |
| Videos     | `/videos/`                                 | `pages/videos.md`          |
| About      | `/about/`                                  | `pages/about.md`           |
| Blog Posts | `/category/year/month/day/post-title.html` | `_posts/*.md`              |
| Archive    | `/archive/`                                | (auto-generated by Jekyll) |

## Build & Serve

```bash
# Build site
bundle exec jekyll build

# Serve locally (with live reload)
bundle exec jekyll serve --host=0.0.0.0 --port=4000

# Build without SCSS warnings
./build.sh
```

## Scalability Notes

### Current Capacity

- ✅ 19 posts
- ✅ 2 pages
- ✅ 14+ images

### Future Improvements

- Add per-post image directories: `content/posts/{post-slug}/images/`
- Create `_includes/components/post-card.html` for post listings
- Add author system: `_data/authors.yml`
- Add search functionality: `assets/js/search.js` (currently basic)
- Create category and tag landing pages

## Migration Notes

This structure was migrated from a flat layout:

- **Old**: `images/`, `videos.markdown`, `about.markdown` at root
- **New**: Organized in `content/`, `pages/`, `_includes/`, `_layouts/`
- **All posts**: Updated with new image paths (`/content/images/shared/`)
- **No breaking changes**: All URLs remain the same for existing posts

## Support

For questions about structure, see:

- `doc/LOCAL_SETUP.md` - Development setup
- `doc/features/navigation.md` - Navigation customization
- `doc/features/VIDEOS_PAGE_GUIDE.md` - Videos page setup
