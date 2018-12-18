



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

				{{ include.intro | markdownify }}

				<h2 class="subtitle">Why me?</h2>
			{% endif %}
		{% endif %}
		
		{{ section.content | markdownify }}
	</div>
</section>
{% endfor %}


<section class="panel intro">
	<div class="panel-contents">

		

		I’m primarily a visual and product designer, but I have a strong technical background and a wide-ranging general knowledge that allows me to approach my work in a holistic way. I care deeply about diversity and inclusivity in tech and frequently speak at events across the world. My career has been marked by a continued process of experimentation and innovation, bringing new ideas to every project I join.

		Let’s make great things together!
	</div>
</section>



