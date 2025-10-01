---
layout: default
title: Publications
permalink: /publications/
---

<section class="card">
  <h2>Publications</h2>
  <ul class="pub-list">
    {% for p in site.data.publications %}
      <li>{{ p.title }}, {{ p.venue }} {{ p.year }}</li>
    {% endfor %}
  </ul>
</section>


