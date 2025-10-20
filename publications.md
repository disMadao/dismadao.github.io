---
layout: default
title: Publications
permalink: /publications/
---

<section class="card">
  <h2>Selected Publications</h2>
  <div class="pub-list">
    {% for p in site.data.publications %}
      <div class="pub-item">
        <p class="pub-authors">{{ p.authors }}</p>
        <p class="pub-title">"{{ p.title }}"</p>
        <p class="pub-venue">
          {% if p.venue_full %}{{ p.venue_full }} ({{ p.venue }}{% if p.rank %}, {{ p.rank }}{% endif %}){% else %}{{ p.venue }}{% if p.rank %} ({{ p.rank }}){% endif %}{% endif %}, {{ p.year }}
          {% if p.notes %}<br><span class="pub-notes">{{ p.notes }}</span>{% endif %}
        </p>
      </div>
    {% endfor %}
  </div>
</section>


