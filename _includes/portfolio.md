{% for project in site.projects %}
<article class="content">
  <h3 class="subtitle">{{ project.title }}</h3>
    <img src="{{ project.image }}">
    <div class="project-description">
      {{ project.content | markdownify }}
    </div>
</article>
{% endfor %}
