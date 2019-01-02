---
id: pique
title: Pique
order: 3
image: "/assets/img/pique.jpg"
tags: [competitive analysis, wireframing, prototyping, visual design, front-end development, usability testing, documentation]
summary: A WordPress.com theme designed for small businesses, now in use on over 600,000 user sites.
repo: https://github.com/Automattic/themes/tree/master/pique
demo: https://piquedemo.wordpress.com/
---

## Challenge

Small businesses were an underserved market in WordPress.com's theme offering, which was primarily geared towards bloggers. In order to appeal to a wider market and compete better, we needed to build themes that solved problems for small businesses.

## Research

I started development by researching patterns used real websites, focussed on coffeeshops as a specific niche.

## Ideation

Research revealed that a single-page scrolling site was extremely popular within this niche. This proved to be a particularly challenging form of site to build with the existing theme library available on WordPress.com, so it became necessary to devise a way of accomplishing this within the technical constraints of the platform, which really wasn't designed to handle this sort of pattern.

I ended up prototyping two potential solutions that worked within WordPress' technical constraints in the most user-friendly way possible. To determine the right path, I tested these approaches on users, both with and without pre-existing WordPress experience.

## Design 

![Screenshot of theme viewed on different devices](/assets/img/pique/pique-responsive.png){:.noshadow}

The visual design followed patterns discovered in the research phase, using darker colours, a subdued colour palette, and modern-looking typography.

As soon as a working prototype was ready, I presented it to my team for feedback. We iterated through feedback cycles, ensuring that nothing was missed and that the scope of features and solutions would account for a wide range of potential use cases for the theme. 

![Interior page design](/assets/img/pique/single-post.png)

I paid special attention to the contact panel, since this is of prime importance for brick-and-mortar businesses. The theme includes an icon set to use as decoration, and provides the ability to embed a map. The theme tightly integrated with testimonials and provided lots of out-of-the-box styling for them. I also included a number of button styles to make it simpler to add a call-to-action to the page.

![Map with overlaid contact panel](/assets/img/pique/overlay.png)

Each panel was given an adjustable overlay made up of a solid colour, with the opacity and colour being adjustable by the user. This allowed for more dynamic layout options as well as helping with legibility for text panels. To increase user understanding of the panel structure, I hacked WordPress' Customizer module in order to highlight the currently-active panel.

![Pique as viewed in the Customizer](/assets/img/pique/customizer.jpg)

Finally, in order to make the user experience more clear, I built out a diagram and wrote [an extensive help page](https://wordpress.com/theme/pique){:rel="nofollow"}.

![Diagram of panel structure](/assets/img/pique/pique-diagram2.png){:.noshadow}

## Results

Pique was well-received on both [WordPress.com](https://en.blog.wordpress.com/2015/12/17/pique/){:rel="nofollow"} and [WordPress.org](https://wordpress.org/support/theme/pique/reviews/){:rel="nofollow"} on its release. It even picked up some positive press:

> Most of the themes created by the professional design team at WordPress.com are geared towards bloggers...that’s why the latest Pique theme is an unusual and exciting release."

-[WP Tavern](https://wptavern.com/pique-a-free-small-business-theme-for-wordpress){:rel="nofollow"}

Pique is now in use on over 600,000 WordPress.com user sites, as well as over 4000 self-hosted WordPress sites.

The innovative patterns established in Pique, specifically for building a one-page site with multiple panels, were then refined and reused by a number of different themes that followed, including the default Twenty Seventeen theme for that year.

![Full theme](/assets/img/pique/pique-featured-screenshot.jpg)

