<nav class="main-nav">
	<ul>
		{% assign sections = site.sections | sort: 'order' %}
		{% for section in sections %}
			{% if section.heading != "empty" %}
				{% assign sectionid = section.id | remove: "/sections/" %}
				{% if layout.name == "default" %}
					<li><a href="#{{ sectionid }}">{{ section.title }}</a></li>
				{% else %}
					<li><a href="/#{{ sectionid }}">{{ section.title }}</a></li>
				{% endif %}
			{% endif %}
		{% endfor %}
	</ul>
</nav>
