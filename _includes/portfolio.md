{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
<article class="portfolio-item">
	<img src="{{ project.image }}">

	<div class="project-details">
		<h3 class="subtitle">{{ project.title }}</h3>

		<div class="project-description">
		  {{ project.summary | markdownify }}
		</div>

		<a href="{{ project.url }}">View project →</a>
	</div>
</article>
{% endfor %}
