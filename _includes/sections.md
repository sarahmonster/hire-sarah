{% for section in site.sections %}
<section class="panel {{ section.id }}">
	<div class="panel-contents">
		{% if section.title != "empty" %}
	  	<h2 class="panel-title">{{ section.title }}</h2>
	  {% endif %}
	  {{ section.content | markdownify }}
	</div>
</section>
{% endfor %}
