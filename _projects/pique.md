---
id: pique
title: Pique
order: 5
thumbnail: "/assets/img/pique/pique-thumbnail.jpg"
background: "/assets/img/pique/background.png"
tags: [competitive analysis, wireframing, prototyping, visual design, front-end development, usability testing, documentation]
summary: A WordPress.com theme designed for small businesses, using creative techniques to allow for user customisation. Used by over a million WordPress sites small and large.
repo: https://github.com/Automattic/themes/tree/master/pique
demo: https://piquedemo.wordpress.com/
public: true
colorScheme: cyan
---

{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="Small businesses were an underserved market in WordPress.com’s theme offering, which was primarily geared towards bloggers. In order to appeal to a wider market and compete better, we needed to build themes that solved problems for small businesses."

  image="/assets/img/pique/one-page.png"
  alt="Screenshot of Pique's demo site, showing multiple panels with different types of content typical to a coffeshop."
%}

{% include portfolio-panel.md
  metadata="Research"
  heading="Decoding visual patterns"
  content="I started development by researching patterns used on real websites. I focussed on coffeeshops as a specific niche for this theme.

  Research revealed that a single-page scrolling site was extremely popular within this niche, but not something offered by existing WordPress.com themes."

  image="/assets/img/pique/coffeeshop-site-research.png"
  alt="Screenshots of visual patterns I noticed were common to coffeeshops."
%}

{% include portfolio-panel.md
  metadata="Visual design"
  heading="Mocking up & iterating"
  content="The visual design followed patterns discovered in the research phase, using darker colours, a subdued colour palette, and modern typography. In addition to designing the scrolling single-page design, I also worked on interior pages in a complementary style.

  As soon as a working prototype was ready, I presented it to my team for feedback. We iterated through feedback cycles, ensuring that nothing was missed and that the scope of features and solutions would account for a wide range of potential use cases for the theme."
  image="/assets/img/pique/inside-page.png"
  alt="Screenshots of the interior page design"
%}

{% include portfolio-panel.md
  metadata="Lightweight usability testing"
  heading="Testing my assumptions for a better user experience"
  content="This proved to be a particularly challenging form of site to build with the existing theme library available on WordPress.com, so it became necessary to devise a way of accomplishing this within the technical constraints of the platform. WordPress's Customizer wasn't designed to handle this sort of pattern, so it was important to keep the experience intuitive even though we were breaking the mould a bit.

  I ended up prototyping two potential solutions that worked within WordPress.com’s technical constraints in the most user-friendly way possible. To determine the right path, I tested these approaches on users, both with and without pre-existing WordPress experience.

  To increase user understanding of the panel structure, I hacked WordPress’ Customizer module in order to highlight the currently-active panel."
  image="/assets/img/pique/testing-customizer.png"
  alt="Screenshot of WordPress' Customizer, with panels highlighted to allow users to understand where they are."
%}

{% include portfolio-panel.md
  metadata="Documentation & customisation"
  heading="Generating value for businesses"
  content="Thanks to the research I'd done, I had an idea of which patterns were commonly used by business sites. Some of these patterns would be difficult or impossible to do with WordPress out of the box, so I built in special functionality to make it simpler. The theme includes an icon set, map integration, testimonials, and custom button styling, as well as special templates for panels.

  Each panel was given an adjustable overlay made up of a solid colour, with the opacity and colour being adjustable by the user. This allowed for more dynamic layout options as well as helping with legibility.

  Finally, in order to make the user experience more clear, I built out a diagram and wrote an [extensive help page](https://wordpress.com/theme/pique)."
  image="/assets/img/pique/help-pages.png"
  alt="Screenshot of Pique's help page, including detailed documentation and diagrams of custom functionality."
%}

{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="Pique was well-received on both [WordPress.com](https://en.blog.wordpress.com/2015/12/17/pique/) and [WordPress.org](https://wordpress.org/support/theme/pique/reviews/) on its release. It even picked up some [positive press](https://wptavern.com/pique-a-free-small-business-theme-for-wordpress) and was featured in WordPress.com TV commercials.

  Pique is now in use on over 900,000 WordPress.com user sites, as well as over 4,000 self-hosted WordPress sites, where it has a 4.8 out of 5 user rating.

  The innovative patterns established in Pique, specifically for building a one-page site with multiple panels, were later reused by a number of different themes that followed, including the default Twenty Seventeen theme for that year. The theme has been used in a number of custom high-profile client sites (like [Jia Tolentino](https://wordpress.com/discover-wordpress/2018/05/31/homepages-with-panels/)) for its flexibility."
  image="/assets/img/pique/outcomes.png"
  alt="Document showing steps in user research project, plus stats (25 researchers, 7 days, 17 participants.)"
%}
