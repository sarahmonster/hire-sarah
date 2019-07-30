{% assign counter = counter | plus: 1 %}
{% assign nextPanel = counter | plus: 1 %}

<section class="portfolio-panel panel" id="portfolio-panel-{{ counter }}">

  <div class="portfolio-panel-text">
  	<span class="dates">{{ include.metadata }}</span>
  	<h2 class="subtitle">{{ include.heading }}</h2>
  	{{ include.content | markdownify }}

    {% if include.metadata == "Outcomes" %}
      <a class="portfolio-panel-next-panel-link" href="#portfolio-panel-title">
        {% include arrow-up-circle.svg %}
      </a>
    {% else %}
      <a class="portfolio-panel-next-panel-link" href="#portfolio-panel-{{ nextPanel }}">
        {% include arrow-down-circle.svg %}
      </a>
    {% endif %}
  </div>

  <div class="portfolio-panel-gallery">
    <img class="portfolio-panel-image" src="{{ include.image }}" alt="{{ include.alt }}"/>
  </div>


</section>
