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
