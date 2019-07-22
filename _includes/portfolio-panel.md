<section class="portfolio-panel panel">

  <div class="portfolio-panel-text">
  	<span class="dates">{{ include.metadata }}</span>
  	<h3 class="subtitle">{{ include.heading }}</h3>
  	{{ include.content | markdownify }}
  </div>

  <div class="portfolio-panel-gallery">
    <img class="portfolio-panel-image" src="{{ include.image }}" />
  </div>

</section>
