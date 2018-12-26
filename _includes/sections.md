{% for section in site.sections %}
<section class="panel {{ section.class }}">
	<div class="panel-contents">
		{% if section.title != "empty" %}
			<h2 class="panel-title">{{ section.title }}</h2>
		{% endif %}
		
		{% if section.class == "intro" %}
			{% if include.permalink %}
				<p>👋 hello {{ include.company }}! I’d like to be your new {{ include.jobtitle }}.</p>

				<h2 class="subtitle">Why {{ include.company }}?</h2>

				{{ include.whyyou | markdownify }}

				<h2 class="subtitle">Why me?</h2>

				{{ include.whyme | markdownify }}

				<p>Let’s make great things together!</p>
			{% else %}
				{{ section.content | markdownify }}
			{% endif %}
		{% else %}
			{{ section.content | markdownify }}
		{% endif %}
		
	</div>
</section>
{% endfor %}
