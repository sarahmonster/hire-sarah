{% assign counter = counter | plus: 1 %}
{% assign nextPanel = counter | plus: 1 %}

<section class="portfolio-panel panel" id="portfolio-panel-{{ counter }}">

  <div class="portfolio-panel-text">
   <span class="dates">{{ include.metadata }}</span>
   <h2 class="subtitle">{{ include.heading }}</h2>
   {{ include.content | markdownify }}

    {% if include.metadata == "Outcomes" %}
      <a class="portfolio-panel-next-panel-link" href="#portfolio-panel-title" title="Back to top">
        {% include arrow-up-circle.svg %}
      </a>
    {% else %}
      <a class="portfolio-panel-next-panel-link" href="#portfolio-panel-{{ nextPanel }}" title="Next panel">
        {% include arrow-down-circle.svg %}
      </a>
    {% endif %}
  </div>

  <div class="portfolio-panel-gallery">
  {% if include.video %}
    <iframe width="560" height="315" src="{{ include.video }}" title="Mic Drop 2.0 promo video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  {% else %}
    <img class="portfolio-panel-image" src="{{ include.image }}" alt="{{ include.alt }}"/>
  {% endif %}

  </div>

</section>
