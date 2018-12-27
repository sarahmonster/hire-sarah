{% assign sections = site.sections | sort: 'order' %}
{% for section in sections %}
	{% assign sectionid = section.id | remove: "/sections/" %}
	<section class="panel {{ section.class }}" id="{{ sectionid }}">
		<div class="panel-contents">

			{% if section.heading != "empty" %}
				<h2 class="panel-title">{{ section.heading }}</h2>
			{% endif %}
			
			{% if sectionid == "intro" %}
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
