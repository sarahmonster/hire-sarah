{% assign projects = site.projects | sort: "order" | where: "public", true %}

{% for project in projects %}
  {% if project.thumbnail %}
   {% assign thumbnailURL = project.thumbnail %}
  {% else %}
   {% assign thumbnailURL = project.image %}
  {% endif %}

  <article class="portfolio-item">
   <img src="{{ thumbnailURL }}">

   <div class="project-details">
    <h3 class="subtitle">{{ project.title }}</h3>

    <div class="project-description">
    {{ project.summary | markdownify }}
    </div>

    <a href="{{ project.url }}">View project →</a>
   </div>
  </article>
{% endfor %}
