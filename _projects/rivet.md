---
id: rivet
title: Rivet
order: 1
image: "/assets/img/rivet.png"
tags: [user research, competitive analysis, wireframing, prototyping, visual design, development direction, front-end development, usability testing, product management]
summary: An experimental project designed to vastly simplify and streamline the WordPress site-building process for small business owners by using technology to automate design decisions. 
demo: https://rivet.vip/
---

## Challenge

Building a website from scratch is a challenge for small businesses, who often lack the resources to do it themselves. On WordPress in particular, even for professionals, setting up a website can be a painful process involving a great many steps, hops, and jumps. We wanted to make it as easy as possible to get up and running with a simple one-page website that would meet their needs.


## Vision

Setting up a site on WordPress.com is hard.

Rivet aimed to simplify that process by using data from existing sources and machine learning to programmatically build out starter sites for small businesses, using a minimal number of user-provided inputs and decisions.

This broke down into a few different components:

- an API that pulls a business’ data from public sources (Google Places, Facebook)
- a machine-learning algorithm that parses provided data (existing text + imagery + some descriptive adjectives) and uses that data to suggest a colour and typography palette
- a script that will take all that data, mash it together, and turn it into a WordPress.com site

The aim was that the final sites will be unique and personalised to the customer. They will be “starter sites” in that they’ll be ready to launch immediately, but you can also take the final result and customise it further. It should be possible to set up a site that feels relevant and effective for your business in less than five minutes.


## Research

I kicked off the project with some exploratory user research, talking to small business owners to get a better understanding of their needs and pain points as they relate to websites. 

A key finding was that they had no real interest in the process of building a site, but didn't have the budget to hire someone to take it on. We also discovered that content generation was a huge blocker, and many people abandoned sites on WordPress.com full of dummy content.

> Through multiple experiences of my own and hearing about others, I would have to say generating content is the hardest part of building a site. We can help you create a site in seconds and give it a professional look, but without the content, it isn’t very useful. 

I also conducted competitive analysis to benchmark competitors and upstarts in this space.

## Ideation

Once we had a better understanding of small businesses needs relating to websites and the existing landscape, I kicked off the project by working backward from the end result: start by working out what the minimum valuable website would be for a small-business to say “yes! that is what I want.”

>What is an MVP for this? It can be a basic site, more like a splash page, that answers the main questions for a business: Who we are, what we do, how to find us. The main goal is to get to something that a business owner would want to publish right away (instead of a starting point of a site that they still have to spend a bunch of time filling in and customizing).

<div class="portfolio-sequence four-column">
	<img src="/assets/img/rivet/widescreen-mock.png" class="double-size" />
	<img src="/assets/img/rivet/mock-a.png" />
	<img src="/assets/img/rivet/mock-c.png"/>
	<img src="/assets/img/rivet/mock-d.png" />
	<img src="/assets/img/rivet/mock-b.png" />
</div>

To validate the approach, the team bootstrapped a v0.1 of the functionality and then semi-manually built out sites following this template for businesses who had previously struggled to build a site on WordPress.com. When results proved positive, we moved forward to higher-fidelity plans for increased automation.


## Design 

I built wireframes and prototypes to lead development direction. These prototypes and diagrams were frequently updated and iterated on as we progressed through the process and discovered areas that needed improvement.

<div class="portfolio-sequence">

	<figure>
		<img src="/assets/img/rivet/wires/original-find-my-business-flow.png"/>
		<figcaption>Original "find-my-business" flow. This was a difficult, but important, step to get right, as we needed to strike a balance between usability and the technical limitations of the API. This flow saw a great deal of iteration between design and development.</figcaption>
	</figure>

	<figure class="double-width">
		<img src="/assets/img/rivet/wires/find-my-business-flow.png"/>
		<figcaption>Revised "find-my-business" flow, taking into account some technical limitations</figcaption>
	</figure>

		<figure class="double-size">
		<img src="/assets/img/rivet/wires/login-flow.png" />
		<figcaption>Login flow</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/wires/upload-photos.png" />
		<figcaption>Upload photos interface</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/wires/edit-design.png" />
		<figcaption>Edit design flow</figcaption>
	</figure>



	<figure class="full-width">
		<img src="/assets/img/rivet/wires/build-site.png" />
		<figcaption>Build site step</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/wires/choose-keywords.png" />
		<figcaption>Keyword selection, used to feed design choices</figcaption>
	</figure>

	<figure class="double-width">
		<img src="/assets/img/rivet/wires/upgrade-flow.png" />
		<figcaption>Upgrade to WordPress.com flow</figcaption>
	</figure>
</div>

Prototypes: [original flows](https://automattic.invisionapp.com/share/4JPTIDIXG5T), [login flow](https://automattic.invisionapp.com/share/7HJT5D9DE2V), [upgrade to WordPress.com flow](https://automattic.invisionapp.com/share/ZFJSM0JY895)

## Copyediting

Working closely with our editorial team, I copyedited every string in the application, paying particular attention to removing jargon and ensuring that error messages were as helpful as possible.


## Visual & marketing design

Originally, Rivet's visual design comprised of a language I developed from scratch, including design patterns, visual styles, and iconography. We later decided to shift the visual language to tie more closely to WordPress.com's visual language, and 

I collaborated again with our editorial team to develop a name for the product that communicated strength, stability, and a builder approach. We landed on Rivet, and I designed a friendly robot to guide users through the process.

<div class="portfolio-sequence">

	<figure>
		<img src="/assets/img/rivet/visuals/sketch1.jpg" />
		<figcaption>Early sketches</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/visuals/sketch2.jpg" />
		<figcaption>Early sketches</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/visuals/sketch3.jpg" />
		<figcaption>Early sketches</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/visuals/early-visual.png" />
		<figcaption>An earlier iteration of the visual design of the product</figcaption>
	</figure>

	<figure class="double-size">
		<img src="/assets/img/rivet/visuals/landingpage-desktop.png" />
		<figcaption>Landing page design</figcaption>
	</figure>

	<figure class="full-height">
		<img src="/assets/img/rivet/visuals/landingpage-mobile.png" />
		<figcaption>Landing page design, mobile</figcaption>
	</figure>

	<figure class="double-width">
		<img src="/assets/img/rivet/visuals/robot.png" class="noshadow"/>
		<figcaption>I drew a robot, because of course I did. If we'd had more time, he would definitely have been SVG-animated.</figcaption>
	</figure>

	<figure class="double-width">
		<img src="/assets/img/rivet/screenshots/address.png" />
		<figcaption>Rivet tries first to find businesses nearby. Works great on a phone!</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/screenshots/is-this-you.png" />
		<figcaption>Rivet confirms it's found the right business...</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/screenshots/social-entry.png" />
		<figcaption>...then asks if it's found the right social media accounts for you.</figcaption>
	</figure>

	<figure>
		<img src="/assets/img/rivet/screenshots/keyword-entry.png" />
		<figcaption>Keywords are used to inform design decisions, so if you enter "natural" here...</figcaption>
	</figure>

	<figure class="double-width">
		<img src="/assets/img/rivet/screenshots/colours.png" />
		<figcaption>...the colours on your site are a bit more muted.</figcaption>
	</figure>


</div>


## Testing

Testing was conducted iteratively throughout the process, both to test the effectiveness of the final site and to test the interface itself. 

Initial testing was done by semi-manually building sites for Business Concierge customers and ensuring the output sites are helpful as a starting point. A second round of testing was done for our social user milestone. Once we were ready for more testing, we opened an internal call for testing.

The next test involved moderated user sessions. Testing comprised a short interview, followed by a usability test, and then some follow-up questions, both qualitative and quanititative.

Key metrics to judge our success included: time to build a site, rating of ease of building site, and rating of overall value of final site.

Further rounds of testing were done at each milestone as the prototype develops.


## Results

I led this project from a design, product, and vision perspective as it morphed across two different teams and different projects, and continue to be heavily involved in sharing the approaches that worked (and didn't work) here with different projects across the company.

Rivet was an experimental projected piloted by a team responsible for experimentations, and one of the key troubles we faced was the lack of resources to fully support a product and brand. 

Design patterns, approaches, and Rivet's API are now being implemented in the WordPress mobile app, in WordPress.com signup, and in third-party importers.
