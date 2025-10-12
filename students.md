---
layout: default
title: Students
permalink: /students/
---

<section class="card">
  <h2>Current Students</h2>
  <div class="student-grid">
    {% for s in site.data.students.current %}
      <div class="student-card">
        {% if s.photo %}
          <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
        {% else %}
          <div class="student-photo-placeholder">{{ s.name | slice: 0 }}</div>
        {% endif %}
        <h3>{{ s.name }}</h3>
        <p>{{ s.degree }}</p>
      </div>
    {% endfor %}
  </div>
</section>

<section class="card">
  <h2>Alumni</h2>
  <div class="student-grid">
    {% for s in site.data.students.alumni %}
      <div class="student-card">
        {% if s.photo %}
          <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
        {% else %}
          <div class="student-photo-placeholder">{{ s.name | slice: 0 }}</div>
        {% endif %}
        <h3>{{ s.name }}</h3>
        <p>{{ s.next }}</p>
      </div>
    {% endfor %}
  </div>
</section>


