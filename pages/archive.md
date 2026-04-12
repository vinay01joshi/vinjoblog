---
layout: page
title: Archive
permalink: /archive/
---

<div class="archive-container">
  <h2>Blog Archive</h2>
  
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  
  {% for year_group in posts_by_year reversed %}
    <div class="archive-year">
      <h3>{{ year_group.name }}</h3>
      
      {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
      
      {% for month_group in posts_by_month %}
        <div class="archive-month">
          <h4>{{ month_group.name }}</h4>
          <ul class="archive-posts">
            {% for post in month_group.items %}
              <li>
                <span class="post-date">{{ post.date | date: "%d" }}</span>
                <a href="{{ post.url }}">{{ post.title }}</a>
                {% if post.categories %}
                  <span class="post-categories">
                    {% for category in post.categories %}
                      <span class="category-tag">{{ category }}</span>
                    {% endfor %}
                  </span>
                {% endif %}
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>

<style>
  .archive-container {
    max-width: 800px;
    margin: 2rem auto;
  }

  .archive-year {
    margin: 2rem 0;
  }

  .archive-year h3 {
    font-size: 1.5rem;
    color: #333;
    border-bottom: 2px solid #007bff;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  .archive-month {
    margin-bottom: 1.5rem;
    margin-left: 1rem;
  }

  .archive-month h4 {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }

  .archive-posts {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .archive-posts li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .archive-posts li:hover {
    background-color: #f5f5f5;
  }

  .archive-posts .post-date {
    color: #999;
    font-size: 0.9rem;
    min-width: 30px;
    text-align: center;
  }

  .archive-posts a {
    color: #007bff;
    text-decoration: none;
    flex: 1;
  }

  .archive-posts a:hover {
    text-decoration: underline;
  }

  .post-categories {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .category-tag {
    background: #e7f3ff;
    color: #0066cc;
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  /* Dark mode support */
  .dark-mode .archive-year h3 {
    color: #ffffff;
    border-bottom-color: #64b5f6;
  }

  .dark-mode .archive-month h4 {
    color: #b0bec5;
  }

  .dark-mode .archive-posts li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .dark-mode .archive-posts a {
    color: #64b5f6;
  }

  .dark-mode .category-tag {
    background: rgba(100, 181, 246, 0.2);
    color: #64b5f6;
  }

  @media (max-width: 768px) {
    .archive-container {
      padding: 0 1rem;
    }

    .archive-posts li {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
    }

    .archive-posts .post-date {
      min-width: auto;
      text-align: left;
    }

    .post-categories {
      width: 100%;
      margin-top: 0.3rem;
    }
  }
</style>
