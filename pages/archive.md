---
layout: default
title: Archive
permalink: /archive/
---

<div class="archive-page-v2">
  <h1 class="main-title">Archive</h1>

  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year_group in posts_by_year %}
    <section class="year-section">
      <h2 class="year-title">{{ year_group.name }} <span class="sup-count">{{ year_group.items.size }}</span></h2>

      {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%B'" %}
      {% for month_group in posts_by_month %}
        <div class="month-group">
          <div class="month-sidebar">
            <h3 class="month-title">{{ month_group.name }} <span class="sup-count">{{ month_group.items.size }}</span></h3>
          </div>
          <div class="month-posts">
            {% for post in month_group.items %}
              <div class="archive-entry">
                <div class="entry-title">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </div>
                <div class="entry-meta">
                  <span class="entry-date">{{ post.date | date: "%d %b, %Y" | upcase }}</span>
                  <span class="entry-read">
                    {{ post.content | strip_html | number_of_words | divided_by: 200 | plus: 1 }} MIN READ
                  </span>
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
      {% endfor %}
    </section>
  {% endfor %}
</div>

<style>
  .archive-page-v2 {
    max-width: 900px;
    margin: 4rem auto;
    padding: 0 2rem;
    color: #fff;
    font-family: inherit;
  }

  .main-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    letter-spacing: -2px;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .year-section {
    margin-bottom: 4rem;
  }

  .year-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    color: #fff;
  }

  .sup-count {
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.3);
    margin-top: 0.4rem;
  }

  .month-group {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .month-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .month-posts {
    display: flex;
    flex-direction: column;
  }

  .archive-entry {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.15rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.2s ease;
    gap: 2rem;
  }

  .entry-title {
    flex: 1;
    
    a {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.4;
      text-decoration: none;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .entry-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    min-width: 120px;
    margin-top: 0.15rem;
  }

  .entry-date {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 0.3rem;
    letter-spacing: 0.03em;
  }

  .entry-read {
    font-size: 0.65rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  @media (max-width: 850px) {
    .archive-entry {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
      padding: 1rem 0;
    }

    .entry-meta {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>

