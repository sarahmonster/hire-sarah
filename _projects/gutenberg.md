---
id: gutenberg
title: Gutenberg
order: 2
image: "/assets/img/gutenberg/editor.png"
tags: [user research, prototyping, wireframing, UX design, design systems, documentation, data visualisation]
summary: A large-scale open-source undertaking, Gutenberg is the codename for both a new editor, and a fundamental change to the way that WordPress works.
repo: https://github.com/wordpress/gutenberg
---

## Challenge 

Gutenberg is the codename for the new WordPress editor, a large-scale open-source undertaking involving hundreds of contributors. I came into the project two years into its development with the intention of improving consistency, flows, and the overall user experience.

As the editor expands to encompass the entire site-building experience, I'm closely involved with designing and planning this second iteration.

![post editing screen](/assets/img/gutenberg/animated.gif)

## Research

Conducting user research is especially challenging within an open source project. Privacy concerns along with tool and budget considerations meant that very little research or usability testing was done during the project's initial development, which meant that contentious issues on Github often devolved to opinion-based arguments. Research efforts were primarily focussed on the WordPress community, who reflect a very small (and very unusual) sector of WordPress' core userbase.

In order to instill an appreciation for user research methods and to make it simpler for anyone within the community to conduct their own research, I've been developing a research framework & toolkit. This framework is being built up and tested iteratively as we conduct individual research studies, but comprises of a series of guides and templates, a platform for easy testing, a pre-recruited database of warm leads from which to recruit, and a database of insights gleaned from previous research.

In December, I led a group of twenty designers, developers, and community members in [a round of exploratory research](https://make.wordpress.org/design/2018/11/19/two-ways-to-get-involved-in-gutenberg-user-research/){:rel="nofollow noreferrer"} to better understand users’ mental models and conceptions around building a site. This involved collaborating with a research coordinator and legal to ensure we were able to involve community members directly in the research without accidentally violating user privacy. We provided scripts for all roles and [invited community members to participate as researchers](https://make.wordpress.org/design/2018/11/19/two-ways-to-get-involved-in-gutenberg-user-research/){:rel="nofollow noreferrer"}, providing support and encouragement along the way. In spite of timing, we recevied lots of interest, which we're aiming to build on for future iterations.

Efforts are now underway to compile and analyse results, again with community participation.


## Audits

I coordinated designers to undertake a [full audit of all the individual blocks](https://github.com/WordPress/gutenberg/projects/19){:rel="nofollow noreferrer"} that make up the editor, with an eye toward usability, accessibility, and consistency across the experience.

## Publishing flow

The existing publishing flow was unclear and lacked any feeling of gravitas, for what is a relatively important interaction. I worked on a series of [improvements to the publishing flow](https://github.com/WordPress/gutenberg/issues/7602){:rel="nofollow referrer"}, keeping mobile use first-of-mind.


<div class="portfolio-sequence">
	<img src="/assets/img/gutenberg/pubflow1.png" class="noshadow double-width" />
	<img src="/assets/img/gutenberg/pubflow2.png" class="noshadow double-width" />
	<img src="/assets/img/gutenberg/publishing-flow.gif" class="double-height" />
</div>

[Prototype](https://automattic.invisionapp.com/share/DGNHVJ5ZKBC#/){:rel="nofollow noreferrer"}


## Block design

Designed various Gutenberg blocks, including a to-do list for internal sites, a [KnightLabs block](https://github.com/mkaz/juxtapose-block/issues/1){:rel="nofollow noreferrer"}, and a panel container block.

## Statistics dashboard

Designed a statistics dashboard to demonstrate how Gutenberg is being used in the wild. First iteration visible at [https://gutenstats.blog](gutenstats.blog){:rel="nofollow noreferrer"}.

<div class="portfolio-sequence">
	<figure class="double-size">
		<img src="/assets/img/gutenberg/stats-desktop.png" />
		<figcaption>Full stats page on a desktop</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/gutenberg/mobile-g.png" />
		<figcaption>Mobile view, with alternate approach to showing data</figcaption>
	</figure>
</div>

## Design system

Worked on component documentation based on the Material design system in order to introduce Material design system to Gutenberg.
