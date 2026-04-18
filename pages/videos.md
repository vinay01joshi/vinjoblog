---
layout: default
title: 
permalink: /videos/
---

<div class="videos-page">
  <header class="videos-header">
    <div class="header-content">
      <h1>Videos</h1>
      <p class="videos-desc">Welcome to my project showcase! Explore the intersection of electronic hardware, 3D printing innovations, and software development walkthroughs.</p>
    </div>
    <div class="header-actions">
      <a href="https://www.youtube.com/@vinjo.skills" target="_blank" class="btn-youtube">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        Visit My Channel
      </a>
    </div>
  </header>

  <section class="long-videos-section">
    <div class="video-grid">
      {% for video in site.data.videos %}
        <a href="https://www.youtube.com/watch?v={{ video.youtube_id }}" target="_blank" class="video-card" title="Watch {{ video.title }}">
          <div class="video-thumbnail">
            <img src="https://img.youtube.com/vi/{{ video.youtube_id }}/maxresdefault.jpg" alt="{{ video.title }}" loading="lazy">
            <div class="play-button">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div class="video-content">
            {% if video.category %}
              <span class="video-badge" style="background-color: {{ video.category_color | default: '#666' }}">
                {{ video.category }}
              </span>
            {% endif %}
            <h2>{{ video.title }}</h2>
            <p class="video-excerpt">{{ video.description }}</p>
            <div class="video-meta">
              <span class="meta-item">{{ video.date | date: "%d %b, %Y" }}</span>
              <span class="meta-item">{{ video.duration }}</span>
            </div>
          </div>
        </a>
      {% else %}
        <div class="no-videos">
          <p>Restoring videos from YouTube... Check back soon!</p>
        </div>
      {% endfor %}
    </div>
  </section>

  <section class="shorts-section">
    {% include shorts-marquee.html %}
  </section>
</div>
