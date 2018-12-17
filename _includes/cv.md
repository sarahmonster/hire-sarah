{% for job in site.jobs %}
<article class="content">
	<span class="dates">{{ job.dates }}</span>
	<h3 class="subtitle"><strong>{{ job.title }}</strong>, {{ job.company }}</h3>
	{{ job.content | markdownify }}
</article>
{% endfor %}
