---
id: navigation-menu-block
title: Navigation menu block
order: 3
image: "/assets/img/navigation-menu-block/selected-menu-item.png"
tags: [wireframing, ideation, prototyping, usability testing, affinity mapping, leadership, community management, documentation]
summary: A key component in the WordPress Gutenberg project, the navigation menu block allows users to create navigation menus for their websites in an intuitive and visual way.
repo: https://gutenbergresearch.wordpress.com/
public: true
colorScheme: pink
---

{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="Building navigation menus for a website is a fragmented process that’s difficult to understand and visualise.

  In WordPress, building navigation relies on a pre-existing understanding of WordPress internals. This doesn’t map to users’ mental model of how navigation menus should work. There are multiple ways to create a menu that all offer slightly different experiences, increasing confusion. Creating a link to certain parts of the site often requires manual work.

  With the Gutenberg post editor expanding to encompass a full-site editing experience, we had an opportunity to solve these problems by designing a new paradigm for menu-building."
  image="/assets/img/navigation-menu-block/legacy-menus.png"
  alt="The legacy menu administration screen in WordPress."
%}

{% include portfolio-panel.md
  metadata="Scoping & kickoff"
  heading="Getting everyone on the same page"
  content="I started by establishing a [framework](https://github.com/WordPress/gutenberg/issues/13690#issue-407174490) for understanding the problem and evaluating the solutions.

  This is more process than is typical with the WordPress project, but since we anticipated that comments could veer off-track, it helped to establish guiding principles and clearly identify our metrics in advance of presenting any solutions. This helped guide and frame discussions."
  image="/assets/img/navigation-menu-block/kickoff.png"
  alt="A GitHub issue outlining a framework for understanding and evaluating design solutions for the menu block."
%}

{% include portfolio-panel.md
  metadata="Research & competitive analysis"
  heading="Learning what we already know"
  content="I evaluated a number of different patterns for menu building mechanisms across digital products.  from different mediums, some direct competitors and some not.

  I also visited a number of different sites to determine common patterns and structures for menu design as a whole, and dug up data from WordPress.com's massive user base to better understand how users are currently making use of menus."
  image="/assets/img/navigation-menu-block/menu-patterns.png"
  alt="Screenshots of navigation menu patterns from different websites."
%}

{% include portfolio-panel.md
  metadata="Initial explorations"
  heading="Flipping the first pancakes"
  content="I worked with another designer, collaborating and bouncing ideas off one another continually.

  We started by going broad with our explorations, sketching and prototyping a number of divergent ideas. After collecting informal feedback internally, we polished and presented two of these concepts publicly."
  image="/assets/img/navigation-menu-block/sketches.png"
  alt="Initial sketches of different menu builder concepts"
%}

{% include portfolio-panel.md
  metadata="Iteration"
  heading="Into the woods we go"
  content="Based on feedback and discussion, we broke the problem down into smaller pieces in order to explore each in detail, framing each part of the problem from the user’s perspective:

  1. [What happens when I add a menu?](https://github.com/WordPress/gutenberg/issues/13786)
  2. [How do I add an item to my menu?](https://github.com/WordPress/gutenberg/issues/13789)
  3. [How do I edit that menu item?](https://github.com/WordPress/gutenberg/issues/13790)
  4. [How do I rearrange items in my menu?](https://github.com/WordPress/gutenberg/issues/13792)
  5. [How are menus and menu items presented visually?](https://github.com/WordPress/gutenberg/issues/13791)"
  image="/assets/img/navigation-menu-block/mockups.png"
  alt="Mockups of different menu builder concepts"
%}

{% include portfolio-panel.md
  metadata="Prototyping"
  heading="Spending a lot of time in Figma"
  content="After exploration, discussions, and iterations, we brought our best ideas together into a [clickable Figma prototype](https://www.figma.com/file/FvlTIGvEnr5nbDoLxbOjNn/Navigation-Menu-Block-Combined-Prototype?node-id=162%3A2520) and a [written proposal](https://make.wordpress.org/design/2019/02/26/proposal-navigation-menu-block/), presented with background, guiding principles, a UX flow diagram, mockups, an open request for structured feedback."
  image="/assets/img/navigation-menu-block/prototype.gif"
  alt="Animation of prototyped navigation menu block interface and interaction."
%}

{% include portfolio-panel.md
  metadata="Accessibility"
  heading="Designing inclusively"
  content="Accessibility concerns over Gutenberg had been a huge source of friction in the first phase, so I wanted to be very sure we were taking into account accessibility concerns from the outset. As we narrowed down our prototype, I arranged for periodic [walkthroughs with a member of the accessibility team](https://make.wordpress.org/design/2019/03/01/video-accessibility-walkthrough-of-navigation-menu-block-designs/) to catch any potential issues early on.

  Posting the first of these publicly had an added side benefit of helping to heal those tensions and show that design is considering accessibility concerns from the outset, rather than tacking it on at the end. Community feedback was wildly positive and my leadership here went a long way to improving frayed relations."
  image="/assets/img/navigation-menu-block/accessibility-walkthrough.png"
  alt="Video recording and notes from an accessibility critique of the design concept."
%}

{% include portfolio-panel.md
  metadata="Usability testing"
  heading="Double-checking our instincts"
  content="We conducted seven moderated usability tests to test our prototype and answer some of the broader questions we had about menus and menu usage, including vocabulary.

  We [invited community to participate](https://make.wordpress.org/design/2019/03/12/become-a-wordpress-researcher/) as researchers and had lots of interest from people outside of design who joined in as note-takers and observers.

  Once the sessions were complete, we used affinity mapping to group observations and pull out patterns. From these we pulled out action items, iterated on the prototype, and [shared the results publicly](https://make.wordpress.org/design/2019/04/01/navigation-menu-block-usability-testing-results/)."
  image="/assets/img/navigation-menu-block/affinity-map.png"
  alt="An affinity map showing pain points and suggested fixes, clustered by relationships."
%}

{% include portfolio-panel.md
  metadata="Handoff"
  heading="Guiding development"
  content="Once we had a final prototype, we documented a [detailed hand-off spec](https://github.com/WordPress/gutenberg/issues/13690#issuecomment-480102173), including UX flows, keyboard navigation diagrams, a functional prototype, mockups of individual screens and interactions, and a suggested iterative approach to development sprints.

  As development kicks off, I've been reviewing pull requests, answering questions, and guiding the process. Once a usable prototype exists in code, we'll look at running more usability testing to find issues with our solution."
  image="/assets/img/navigation-menu-block/design-handoff.png"
  alt="Documentation of interaction and visual design for menu block"
%}

{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="Proactively including the accessibility team in the design process lead to improvements in the relationship between the design and accessibility teams.

  Our usability test piqued interest in the community about user research work, and helped developers see things from a more user-centric approach.

  Usability test results were overwhelmingly positive, with the majority of users saying they wished they could use the block on their sites right away."
  image="/assets/img/navigation-menu-block/outcome.png"
  alt="Overview of results from usability testing sessions, and a positive quote from a tester"
%}
