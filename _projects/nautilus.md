---
id: nautilus
title: Nautilus Design System
order: 1
image: "/assets/img/nautilus/geometric-background-pattern.png"
tags: [documentation, leadership, design-systems, visual-design, React, project management, accessibility, design-principles]
summary: An open-source design system and React component library to help designers and developers build better digital products together. Designed for inclusivity, usability, and flexibility.
repo: https://nautilus.octopusthink.com/
---

{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="I can't count the number of times I've designed and built a button over the years. And to what end? They usually wind up looking (and acting!) more or less the same. As someone who likes to build things and work on side projects, I wanted a way to be able to quickly get up and running with a new idea.

  I also need to have a shared vocabulary and set of practises to work better with my developer partner-in-crime. Codifying and documenting our practises allows us both to build things independently.

  Creating a design system allows me to establish a solid, predictable baseline for my work without needing to reinvent the wheel every time. Instead of building yet-another-button, I can spend more of my time innovating on top of my existing baseline."

  image="/assets/img/nautilus/venn-diagram.png"
  alt="Venn diagram showing: What designers know (typography), what developers know (React), and the intersection (shared vocabulary)."
%}

{% include portfolio-panel.md
  metadata="Establishing vision"
  heading="Yet another design system?"
  content="There are loads of other, better-established design systems out there I could leverage. Why bother to build my own?

  Doing it myself allows me a level of control I wouldn't have otherwise, which means I can make sure the system meets my stringent accessibility and usability requirements. Many popular design systems eschew accessibility requirements and force that work onto the person using the design system. I want to implement best practices into the core of my components, not do it for every new project.

  Building this system from the ground-up means a better understanding of the underlying mechanics as well. Nautilus is an opportunity to hone my craft, re-learn some of the basics I may have forgotten, and discover there's still more details for me to learn and fine-tune."
  image="/assets/img/nautilus/structure-diagram.png"
  alt="Diagram of Nautilus' intended structure"
%}

{% include portfolio-panel.md
  metadata="Visual audit"
  heading="How many shades of pink?"
  content="My first step was assessing what I already have by looking at my most recent visual design work. As it turns out, I sort of accidentally have a pretty consistent style—a focus on clarity, contrast between elements, and bold colour choices. Also: I seem to have a preternatural attraction to pink.

  From this, I can start to pick out pertinent pieces. What colours, patterns, and type styles show up as a common thread? This formed the basis for my foundational guidelines, type system, and design tokens. What patterns show up repeatedly and can be extracted from pages I've made? This helped me to prioritise a list of components to build out and informed how those components were designed."
  image="/assets/img/nautilus/audit.png"
  alt="Screenshots of different web components"
%}

{% include portfolio-panel.md
  metadata="Writing design principles"
  heading="Let's be principled"
  content="Design principles are key to a design system. When used correctly and well established, they infuse and inform every other decision that's made. It was important to establish these principles early into the process, since everything else derives from them.

  To define our principles, I designed a series of post-it notes exercises to determine first brand values, followed by design principles. Conducting these tasks helped to establish a shared vision and a clear set of guiding principles to inform all work to come."
  image="/assets/img/nautilus/principles.png"
  alt="Design principles: Be bold, be clear, be inclusive, be smart."
%}

{% include portfolio-panel.md
  metadata="Define a colour palette"
  heading="Now for something different: colours that aren't pink"
  content="The aim of Nautilus' colour palette is to provide a useful array of colours that allow for a wide range of different palettes and moods, but still function harmoniously when paired together.

  This was a pretty lengthy process, and involved a lot of very technical reading about colour! I started by working with a series of different colour pickers, but found none of them really met my needs fully, so I ended up building my own tool [reference when available] to generate colour steps in a predictable way. (Still in progress!)

  The system provides a palette of seven colours (red, pink, purple, blue, cyan, green, yellow), each with 10 tints and shades, balanced against a greyscale gradient to ensure predictable numerical contrast for accessibility purposes. It also provides a neutral palette of greys to match. Components also check for adequete colour contrast and warn if elements don't have sufficient contrast against their backgrounds."
  image="/assets/img/nautilus/colour.png"
  alt="Post on make.wordpress.org inviting community to participate as researchers"
%}

{% include portfolio-panel.md
  metadata="Establishing typographic scales"
  heading="Semi-obsessive typography maths"
  content="The typography nerd in me was delighted to do a deep dive into typographic details. I determined rules for calculating type scales and for programmatically determining an optimal line-height that would still fall on our baseline grid.

  I developed semantic combinations for different \"voices\" and contexts of application (body, instructions, metadata, instructions, etc.), which forms the baseline of the type system. The core variables (fonts, baseline size, scale modifiers, target line-heigh values, etc) are themeable, as are the actual combinations of tokens into semantic styles, making for a highly flexible system with core rules.

  Massimo Vignelli was famed for using a [palette of only six typeface families](https://fontsinuse.com/uses/14164/massimo-vignelli-s-a-few-basic-typefaces)—could I do this too? (My provisional list is currently Inter, Harriet, Sentinel, Gotham, and Mercury, but that's subject to change as the system matures.)"
  image="/assets/img/nautilus/typography.png"
  alt="User interview script and a screen grab from a session recording"
%}

{% include portfolio-panel.md
  metadata="Implementing a spacing system"
  heading="Making the grid"
  content="I'll admit it, somewhere along the line I started picking spacing values out of a hat, and my visual design work was worse for it. Establishing a design system forced me to create predictable and consistent rules for how spacing is applied to elements, leading to more harmonious visual layouts.

  After reviewing other systems, I opted for the commonly-used 8px grid due to its flexibility and ease of use with icons and  other elements. I developed a set of spacing variables, accessible via JS variables as well as as Sketch symbols and Figma components.

  I'm working on building an underlying grid component into the system to allow for easy checks of the spacing whilst developing a site."
  image="/assets/img/nautilus/spacing.png"
  alt="Screenshots of a database of research insights"
%}

{% include portfolio-panel.md
  metadata="Building React components"
  heading="Now, for the easy part"
  content="With the foundations established, I wanted to start moving things into code sooner rather than later. A key component of design systems is ensuring that mental models and vocabulary are shared between designers and developers, and it was important to me that we'd be collaborating and contributing to the system equally as quickly as possible.

  The process for building out components looks something like this:

  - Research: investigate what other systems are doing, how the pattern is currently being used by applications, and how to ensure the pattern is as accessible as possible.
  - Documentation: Leading with a draft of design, usage, and accessibility guidelines ensures that we're thinking first of the component's usage and reusability.
  - Initial development: I build out a first draft of the component in React.
  - Review: I collaborate with my development partner on cleaning everything up, considering use cases, and writing tests to ensure the component is bulletproof.

  The end result is that it sometimes takes three days to build a button component, but we wind up a flexible and well-considered component that's both designed and developed well."
  image="/assets/img/nautilus/components.png"
  alt="Screenshots from user research report, highlighting user journey map."
%}

{% include portfolio-panel.md
  metadata="Project management"
  heading="Keeping our eyes on the prize"
  content="Throughout the project, I'm taking responsibility for project management. Since this is an open-source initiative, a lot of time is invested in ensuring things are well-documented and a clear process has been established. This work includes:

- Determining milestones & prioritising tasks, bumping and reorganising as needed.
- Establishing a release cadence and checklists for release process. (Currently monthly.)
- Automating processes, from testing to releases; nothing that a computer can do is done manually.
- Writing documentation for future contributors.
- Developing a roadmap and a long-term vision for the future, along with success metrics. (Some of this is still in my head!)
- Setting up an editorial calendar to publicise work."
  image="/assets/img/nautilus/project-management.png"
  alt="Screenshots from user research report, highlighting user journey map."
%}

{% include portfolio-panel.md
  metadata="Upcoming work"
  heading="What's next?"
  content="Nautilus is very much still in its infancy. Planned for the future:
  - Design principles & guidelines (in progress 🛠)
  - Design tokens (in progress 🛠)
  - Accessible React components (in progress 🛠)
  - React Native components (planned 💡)
  - Sketch library (in progress 🛠)
  - Figma library (planned 💡)
  - Brand tokens and theme-ability (planned 💡)
  - Automated theme generation (planned 💡)

  Because it's all open-source, the best way to keep tabs on our progression is to follow the [project on GitHub](https://github.com/octopusthink/nautilus)."
  image="/assets/img/nautilus/brand.png"
  alt="Document showing steps in user research project, plus stats (25 researchers, 7 days, 17 participants.)"
%}

{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="Systematising design allows me to better understand how constituent pieces interact with one another. Building it out becomes a lengthy design exercise in codifying all my practices, thinking through things on an atomic level, and considering the *semantics* of all my decisions.

  As a bonus, I also have the opportunity to build a system that focuses on accessibility and inclusion, as well as allowing for the development of a truly flexible system in terms of brand expression, all of which are highly important to me. Building Nautilus also sets the stage for experimentation in automating visual design practises—my end goal is to build a robot to do my job—Nautilus is just the first step.

  Even with the very minimal structure that's currently in place, it's exponentially easier to build out a new application from scratch. And it looks pretty good right out of the box! I designed a colour-picker app in under an hour, and my development partner built out a trivia app in just a few hours without needing my input at all. One of the key success metrics for the project is that either a designer or a developer should be able to build a simple React app with minimal hand-holding from the other, which is already well in progress."
  image="/assets/img/nautilus/peacock.png"
  alt="Document showing steps in user research project, plus stats (25 researchers, 7 days, 17 participants.)"
%}
