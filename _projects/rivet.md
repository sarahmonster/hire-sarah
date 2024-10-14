---
id: rivet
title: Rivet
order: 1
thumbnail: "/assets/img/rivet.png"
background: "/assets/img/rivet/background-pattern.png"
tags: [user research, competitive analysis, wireframing, prototyping, visual design, development direction, front-end development, usability testing, product management]
summary: An experimental project designed to vastly simplify and streamline the WordPress site-building process for small business owners by using technology to automate design decisions.
demo: https://rivet.vip/
public: true
---
{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="Building a website from scratch is a challenge for small businesses, who often lack the resources to pay a professional. Doing it yourself can be a painful process involving a great many steps and continual context-switching. Even for agencies and freelancers who build WordPress sites every day, the process is needlessly complex and time-consuming.

  Often times businesses give up and have no website at all—settling on just a Facebook page as their web presence.

  Rivet aimed to simplify that process and make it as easy as possible for small businesses to get up and running with a simple one-page website that would meet their needs. The goal was to automate as much of the process of designing and building a website as possible."

  image="/assets/img/rivet/landing-page.png"
  alt="The landing page for the Rivet website."
%}

{% include portfolio-panel.md
  metadata="Research"
  heading="Learning more about small businesses"
  content="I kicked off the project with some exploratory user research, talking to small business owners to get a better understanding of their needs and pain points as they relate to websites.

  A key finding was that they had no real interest in the process of building a site and didn’t have the budget to hire someone to take it on. I also discovered that content generation was a huge blocker, and many people abandoned sites on WordPress.com full of dummy content.

  I also conducted competitive analysis to benchmark competitors and upstarts in this space."
  image="/assets/img/rivet/initial-research.png"
  alt="My notes from initial user research sessions."
%}

{% include portfolio-panel.md
  metadata="Establishing vision"
  heading="What exactly are we building?"
  content="Before we started, it was important to establish a vision and guiding principles—both to inform the work itself, and to help communicate the project to stakeholders.

  I established that our goal would be to make a system that allowed small businesses to set up a site that feels relevant and effective in less than five minutes. The final sites would be unique and personalised to the customer, but they'd also be fully-fledged [WordPress.com](http://wordpress.com) sites that would be ready to grow as their business did.

  To accomplish this, I designed a system that pulled data from existing online sources and then leveraged machine learning to programmatically build out starter sites for small businesses, using a minimal number of user-provided inputs and decisions."
    image="/assets/img/rivet/screen-flow.png"
    alt="Screenshots showing how Rivet builds out sites for users."
  %}

{% include portfolio-panel.md
  metadata="Ideation"
  heading="Let's start from the ending"
  content="Once I had a better understanding of small businesses' needs and the existing landscape, I kicked off the project by working backward from the end result. This meant figuring out what a minimum valuable website for a small business would be: how much content and customisation would be needed for a business owner to immediately want to publish their site?

  My hypothesis was that a single-page site, with the basic details (\"about us\", logo, social media links, contact information, and hours of operation) would do the trick.

  To validate the approach, a developer and I bootstrapped a v0.1 of the functionality and then semi-manually built out sites following this template for businesses who had previously struggled to build a site on WordPress.com. When results proved positive, we moved forward with plans for increased automation."
  image="/assets/img/rivet/site-samples.png"
  alt="Sample single-page website designs for small businesses."
%}

{% include portfolio-panel.md
  metadata="Sketching & wireframing"
  heading="Putting pen to paper"
  content="The next step was to work out how we'd get there. I started with low-fidelity sketches to plan out the overall user experience quickly. The experience is heavily modelled on my own process building websites for small business clients, and the steps in the flow are essentially programmatic representations of my own process asking clients about their business and what they wanted our of their web presence.

  Once I had sketches I was happy with, I moved to higher-fidelity wireframes and prototypes."
  image="/assets/img/rivet/sketches-wires.png"
  alt="Initial sketches & wireframes."
%}

{% include portfolio-panel.md
  metadata="Prototyping"
  heading="We're off to see the wizard (of Oz)"
  content="When working with my development team, I presented both static wireframes of the overall flow diagram and clickable prototypes. Providing both allows for clearer communication.

  Given the  complexity of the project, prototyping, in various forms, was critical to its success. We used Wizard of Oz prototyping techniques throughout to continually check if our proposed system was heading in the right direction.

  These prototypes and diagrams were frequently updated and iterated on as I progressed through the process and discovered areas that needed improvement. For instance, the \"find my business\" flow was a difficult, but important, step to get right. The interface needed to strike a balance between usability and the technical limitations of the APIs we used. This flow saw a great deal of iteration between design and development.

  Prototypes: [original flows](https://automattic.invisionapp.com/share/4JPTIDIXG5T), [login flow](https://automattic.invisionapp.com/share/7HJT5D9DE2V), [upgrade to WordPress.com flow](https://automattic.invisionapp.com/share/ZFJSM0JY895)"
  image="/assets/img/rivet/prototype.png"
  alt="Screenshots from a prototype."
  caption="Revised \"find-my-business\" flow, taking into account some technical limitationsLogin flowUpload photos interfaceEdit design flowBuild site stepKeyword selection, used to feed design choicesUpgrade to WordPress.com flow"
%}


{% include portfolio-panel.md
  metadata="Copyediting"
  heading="Language is integral to design"
  content="Working closely with the WordPress.com editorial team, I copyedited every string in the application, paying particular attention to removing inaccessible language and ensuring that error messages were as helpful as possible.

  My guiding principle here was to be as friendly as possible. I knew that business owners typically weren't very technical, so I worked to ensure that the language was friendly and jargon-free. I limited the number of questions asked on every page to help users focus on the task at hand. I wanted them to feel as though they had a friendly helper robot guiding them through the process."
  image="/assets/img/rivet/copyedits.png"
  alt="Screenshots of Github issues discussing copy improvements."
%}

{% include portfolio-panel.md
  metadata="Visual design"
  heading="Drawing a lot of different robots"
  content="I collaborated again with our editorial team to develop a name for the product that communicated strength, stability, and a builder approach. We landed on _Rivet_, and I designed a friendly robot to act as a mascot.

  Originally, Rivet’s visual design comprised of a language I developed from scratch, including design patterns, visual styles, and iconography. We later decided to shift the visual language to tie more closely to WordPress.com’s visual language, whilst still having its own unique spin."

  caption="Early sketches An earlier iteration of the visual design of the product. Landing page design. Landing page design, mobileI drew a robot, because of course I did. If I'd had more time, he would definitely have been SVG-animated. Rivet tries first to find businesses nearby. Works great on a phone!"
  image="/assets/img/rivet/visual-design.png"
  alt="Sketches and illustrations of a robot mascot."
%}

{% include portfolio-panel.md
  metadata="Making smart design decisions"
  heading="Smarter defaults, allowing for correction"
  content="A key principle of Rivet was to make smart decisions for users, but to allow for manual correction in case we got things wrong.

  The system uses geolocation to find your business, then confirms it's found the right one. It finds social media accounts to scrape additional data, but checks to confirm. It then gets your logo, generates a colour scheme, and pieces together an about page.

  Then it asks for keywords, which are used to inform visual design and styling. So if you were to enter \"natural\" and \"organic\" you might get some muted greens and browns and Papyrus, but if you were to enter \"simple\" and \"bold\" you might wind up with saturated primary shades and Helvetica.

  Finally, it uses all these inputs to build out a one-page site, and provides an editing interface to tweak as needed."
  image="/assets/img/rivet/intelligence.png"
  alt="Screenshots of Rivet making smart default choices, but allowing for user correction."
%}

{% include portfolio-panel.md
  metadata="Usability testing"
  heading="Testing with real users"
  content="I ran usability tests iteratively throughout the process, both to test the effectiveness of the final site and to test the interface itself.

  I wrote a script comprised of a short interview followed by a usability test and follow-up questions, both qualitative and quantitative. I recruited users in guerilla-fashion, and ran the interview sessions. I also established key metrics to judge our success: time to build a site, rating of ease of building site, and rating of overall value of final site.

  Further rounds of testing were done at each milestone as the prototype developed."
  image="/assets/img/rivet/usability-testing.png"
  alt="Write-ups from usability testing, showing quantitative data."
%}

{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="I led this project from a design, product, and vision perspective as it morphed across two different teams and different projects, and continue to be heavily involved in sharing the approaches that worked (and didn’t work) here with different projects across the company.

  Rivet was an experimental projected piloted by Automattic's internal R&D team, who typically don't tend to launch products. Whilst the project itself was successful, and usability testing indicated that the flow was better for users than our existing flow, we didn't have the resources to support the product and brand.

  Far from an abandoned work, Rivet has been used as a yardstick for innovation and improvements to WordPress.com. A year later, the design patterns, approaches, and Rivet’s API are now being implemented in Automattic products: the WordPress mobile app, in WordPress.com onboarding, and in third-party importers."
  image="/assets/img/rivet/rivet-bot.png"
  alt="A robot waving."
%}
