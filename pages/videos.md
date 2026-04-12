---
layout: page
title: Videos
permalink: /videos/
---

<div class="videos-container">
  {% for video in site.data.videos %}
    <div class="video-card">
      <div class="video-wrapper">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/{{ video.youtube_id }}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-content">
        <h3>{{ video.title }}</h3>
        <p class="video-date">{{ video.date | date: "%B %d, %Y" }}</p>
        <p class="video-description">{{ video.description }}</p>
        {% if video.category %}
          <p class="video-category"><strong>Category:</strong> {{ video.category }}</p>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

<style>
  .videos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .video-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .video-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }

  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-content {
    padding: 1.5rem;
  }

  .video-content h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .video-date {
    color: #999;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .video-description {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
  }

  .video-category {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .videos-container {
      grid-template-columns: 1fr;
    }
  }
</style>
