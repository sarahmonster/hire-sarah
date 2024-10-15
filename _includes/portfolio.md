{% assign projects = site.projects | sort: "order" | where: "public", true %}

{% for project in projects %}
  {% if project.thumbnail %}
   {% assign thumbnailURL = project.thumbnail %}
  {% else %}
   {% assign thumbnailURL = project.image %}
  {% endif %}

{% if project.featured %}
	{% assign featured = "featured" %}
{% else %}
	{% assign featured = "" %}
{% endif %}
  
{% capture extraClasses %}
  colorScheme-{{project.colorScheme}} {{featured}}
{% endcapture %}


  <article class="portfolio-item {{ extraClasses }}" id="{{ project.title | downcase | replace: " ", "-" }}" >
  <a class="portfolio-item-link" href="{{ project.url }}">
  <div class="portfolio-item-wrapper">
   <img src="{{ thumbnailURL }}" class="project-thumbnail">

   <div class="project-details-wrapper">
   {% if project.featured %}
    <img src="{{ project.logo }}" class="project-logo">
    {% endif %}

    <div class="project-details">
      <h3 class="subtitle">{{ project.title }} <span class="text-link-arrow">→</span></h3>

      <div class="project-description">
        {{ project.summary | markdownify }}
      </div>

    </div>
   </div>
   </div>
   </a>
  </article>
{% endfor %}
