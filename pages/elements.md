---
layout: page
title: Elements
permalink: /elements/
---

This page serves as a global elements guide and living style guide for all markdown elements and custom UI components used across the site. Use this as a reference for your everyday blog writing.

## Typography

### Headings

<h1>Heading 1 (h1)</h1>
<h2>Heading 2 (h2)</h2>
<h3>Heading 3 (h3)</h3>
<h4>Heading 4 (h4)</h4>
<h5>Heading 5 (h5)</h5>
<h6>Heading 6 (h6)</h6>

### Text Formats

This is a standard paragraph demonstrating various text formatting options. You can use **bold text** for emphasis, *italic text* for subtle highlights, and ~~strikethrough text~~ for things that are no longer relevant. You can also include `inline code` snippets right into the paragraph.

[This is a primary link](#) that you can hover over to see the transition effect.

---

## Lists

### Unordered List
* First item in the list
* Second item in the list
  * Nested item A
  * Nested item B
* Third item in the list

### Ordered List
1. Step one of the process
2. Step two of the process
   1. Sub-step A
   2. Sub-step B
3. Step three of the process

---

## Tables

Professional grid design for data and specifications.

| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 |
| :--- | :--- | :--- | :--- | :--- |
| Row:1 Cell:1 | Row:1 Cell:2 | Row:1 Cell:3 | Row:1 Cell:4 | Row:1 Cell:5 |
| Row:2 Cell:1 | Row:2 Cell:2 | Row:2 Cell:3 | Row:2 Cell:4 | Row:2 Cell:5 |
| Row:3 Cell:1 | Row:3 Cell:2 | Row:3 Cell:3 | Row:3 Cell:4 | Row:3 Cell:5 |
| Row:4 Cell:1 | Row:4 Cell:2 | Row:4 Cell:3 | Row:4 Cell:4 | Row:4 Cell:5 |
| Row:5 Cell:1 | Row:5 Cell:2 | Row:5 Cell:3 | Row:5 Cell:4 | Row:5 Cell:5 |
| Row:6 Cell:1 | Row:6 Cell:2 | Row:6 Cell:3 | Row:6 Cell:4 | Row:6 Cell:5 |

---

## Quotes

### Left Border Style
Use the `{ : .q-left }` class for a bold quote with a thick colorful left anchor.

<blockquote class="q-left">
  <p>The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!</p>
</blockquote>
<div class="callout-code-example">{: .q-left }<br>> The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!</div>

### Centered Impact Quote
Standard blockquotes with a `<cite>` tag will automatically render as centered impact quotes with decorative markers.

<blockquote>
  <p>Design is not just what it looks like and feels like. Design is how it works.</p>
  <cite>Steve Jobs</cite>
</blockquote>
<div class="callout-code-example">> Design is not just what it looks like and feels like. Design is how it works.<br>><br>> <cite>Steve Jobs</cite></div>

---

## Callouts

Use these custom block styles to emphasize key information. In your markdown, append the class using `{ : .note }` directly below the paragraph.

<div class="note">
  <p>Useful information that users should know, even when skimming content.</p>
</div>
<div class="callout-code-example">{: .note }<br>Useful information that users should know, even when skimming content.</div>

<div class="tip">
  <p>Helpful advice for doing things better or more easily.</p>
</div>
<div class="callout-code-example">{: .tip }<br>Helpful advice for doing things better or more easily.</div>

<div class="important">
  <p>Key information users need to know to achieve their goal.</p>
</div>
<div class="callout-code-example">{: .important }<br>Key information users need to know to achieve their goal.</div>

<div class="warning">
  <p>Urgent info that needs immediate user attention to avoid problems.</p>
</div>
<div class="callout-code-example">{: .warning }<br>Urgent info that needs immediate user attention to avoid problems.</div>

<div class="caution">
  <p>Advises about risks or negative outcomes of certain actions.</p>
</div>
<div class="callout-code-example">{: .caution }<br>Advises about risks or negative outcomes of certain actions.</div>

---

## Code Blocks

Syntax highlighted code snippets automatically adapt to light/dark themes:

```javascript
// Example JavaScript configuration
async function initializeApp(config) {
  try {
    console.log("Initializing...");
    const db = await connectDatabase(config.dbUrl);
    return { status: "success", connection: db };
  } catch (error) {
    console.error("Failed to intialize:", error);
    throw error;
  }
}
```

```python
# Example Python implementation
def calculate_metrics(data_frame, threshold=0.5):
    """Calculates engagement metrics based on threshold."""
    filtered_data = [x for x in data_frame if x > threshold]
    return sum(filtered_data) / len(data_frame) if data_frame else 0
```

---

## Galleries and Images

Standard full-width image:

![Neon Sign Placeholder](/assets/images/placeholder-neon.jpg)

### CSS Grid Gallery

Use the `image-grid` class to dynamically arrange multiple images side-by-side cleanly:

<div class="image-grid">
  <img src="/assets/images/placeholder-grid1.jpg" alt="Gallery Image 1" />
  <img src="/assets/images/placeholder-grid2.jpg" alt="Gallery Image 2" />
  <img src="/assets/images/placeholder-grid3.jpg" alt="Gallery Image 3" />
  <img src="/assets/images/placeholder-grid4.jpg" alt="Gallery Image 4" />
</div>
