---
layout: default
title: Students
permalink: /students/
---

<section class="card">
  <h2>Current Students</h2>
  <ul>
    {% for s in site.data.students.current %}
      <li>{{ s.name }} — {{ s.degree }}</li>
    {% endfor %}
  </ul>
</section>

<section class="card">
  <h2>Alumni</h2>
  <ul>
    {% for s in site.data.students.alumni %}
      <li>{{ s.name }} — {{ s.next }}</li>
    {% endfor %}
  </ul>
</section>


