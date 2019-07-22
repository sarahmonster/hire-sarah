<section class="portfolio-panel panel">

  <div class="portfolio-panel-text">
  	<span class="dates">{{ include.metadata }}</span>
  	<h2 class="subtitle">{{ include.heading }}</h2>
  	{{ include.content | markdownify }}
  </div>

  <div class="portfolio-panel-gallery">
    <img class="portfolio-panel-image" src="{{ include.image }}" alt="{{ include.alt }}"/>
  </div>

</section>
