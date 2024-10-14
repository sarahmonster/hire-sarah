{% assign projects = site.projects | sort: "order" | where: "public", true %}

{% for project in projects %}
  {% if project.thumbnail %}
   {% assign thumbnailURL = project.thumbnail %}
  {% else %}
   {% assign thumbnailURL = project.image %}
  {% endif %}

{% if project.featured %}
	{% assign extraClasses = "featured" %}
{% else %}
	{% assign extraClasses = "single" %}
{% endif %}

  <article class="portfolio-item {{ extraClasses }}" id="{{ project.title | downcase | replace: " ", "-" }}" >
   <img src="{{ thumbnailURL }}" class="project-thumbnail">

   <div class="project-details-wrapper">
   {% if project.featured %}
    <img src="{{ project.logo }}" class="project-logo">
    {% endif %}

    <div class="project-details">
      <h3 class="subtitle">{{ project.title }}</h3>

      <div class="project-description">
      {{ project.summary | markdownify }}
      </div>

      <a href="{{ project.url }}">View project →</a>
    </div>
   </div>
  </article>
{% endfor %}
