---
layout: default
title: News
permalink: /news/
---

<section class="card">
  <h2>News</h2>
  <ul class="news-list">
    {% for item in site.data.news %}
      <li>[{{ item.date }}] {{ item.text }}</li>
    {% endfor %}
  </ul>
</section>


