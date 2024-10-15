---
id: smitten-kitchen
title: Smitten Kitchen
order: 6
thumbnail: "/assets/img/smitten-kitchen/smitten-kitchen-thumbnail.jpg"
background: "/assets/img/smitten-kitchen/background.png"
tags: [VISUAL DESIGN, CLIENT WORK, PROJECT MANAGEMENT, FRONT-END DEVELOPMENT]
summary: Smitten Kitchen is a popular and active food blog that was looking for a revamp. I redesigned the whole site, built out new functionality, then migrated all content to new architecture.
repo: https://smittenkitchen.com/
public: true
colorScheme: purple
---

{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="Deb's popular (2m followers, 6 million visitors per month) food blog was still using a design from 2006 and lacked many modern features like responsiveness.

  The site had grown extensively since its original inception, featuring thousands of posts, each of which received hundreds of comments. It was difficult for readers to sort through the site's huge library of resources to find the right recipe. Printing recipes was cumbersome and often wasted printer ink due to the lack of polished print styles. Deb also wanted to better integrate ads unobtrusively.

  Deb had already been working on a redesign, but she wasn't satisfied with the results. I knew we'd need to take a new approach to ensure we ended up with a solution that was effective."
  image="/assets/img/smitten-kitchen/old-site.png"
  alt="Screenshots of smittenkitchen.com before our redesign. The fonts are very small!"
%}

{% include portfolio-panel.md
  metadata="Kickoff"
  heading="Getting everyone on the same page"
  content="Before starting on client work, it's important to understand what the client is trying to communicate. I worked with Deb to determine her requirements and priorities for the project, as well as what caused the breakdown in the process previously.

  After discussion, it seemed like it would be best to start the redesign project from scratch, since Deb (rightly!) wanted a responsive site and the previous process hasn't allowed for that. We also knew going into the process that we'd be rebuilding the site's frontend theme from scratch, so it made sense to start with a blank slate.

  We then agreed on a timeline for the work, and set up a GitHub project to track and discuss changes."
  image="/assets/img/smitten-kitchen/briefing-scoping.png"
  alt="Email threads discussion the project kickoff."
%}

{% include portfolio-panel.md
  metadata="Visual design"
  heading="Mocking up and iterating"
  content="Started mobile-first, paying attention to the details and focussing on getting things right on small screens.

  I presented three different mobile mock-ups, starting with the single-post screen, since this template was the crux of the site and would be where people would be spending most of their time reading and interacting with Deb's content.

  We iterated back and forth to really perfect the results. After eight rounds of iteration, Deb was happy and we were ready to start developing the front-end!"
  image="/assets/img/smitten-kitchen/mockups.png"
  alt="Three original concept designs for smittenkitchen.com, all shown at mobile size."
%}

{% include portfolio-panel.md
  metadata="Custom development"
  heading="Making recipes better for all of WordPress.com"
  content="As part of this project, I made changes and improvements to WordPress.com's recipe shortcode feature.

  I added cooking time, an image, and a description. I also added the ability to nest notes, ingredients, and directions in the recipe, so they could be formatted by themes in a predictable way.

  Finally, I formatted the output better to conform to microformat standards and tested with various recipe apps.

  These changes were then rolled out to all WordPress.com users."
  image="/assets/img/smitten-kitchen/recipe-shortcode.png"
  alt="Screenshots of the recipe shortcode output on WordPress.com and on smittenkitchen.com."
%}

{% include portfolio-panel.md
  metadata="Front-end development"
  heading="And then I built a website!"
  content="As per Deb's requirements, we also added special functionality to the site, including:
  - A variety of different ways of browsing for recipes.
  - Custom functionality for user comments.
  - Better options for printing recipes.
  - Custom ad slot areas.

  I also took on all the front-end development to build out a custom theme that would faithfully represented the design we’d agreed on."
  image="/assets/img/smitten-kitchen/commenting.png"
  alt="Screenshots of new commenting functionality, including tabs for classifying comments."
%}

{% include portfolio-panel.md
  metadata="Content migration"
  heading="Moving to a new home on WordPress VIP"
  content="A big part of the project was migrating all the content over to WordPress.com's VIP architecture. VIP is a locked-down architecture designed for handling high-traffic, high-profile WordPress websites and thus has less flexible functionality than the previous Smitten Kitchen site's install.

  I built a number of scripts to help with the content migration and ensure that content was converted properly to work with the new system we'd built. With thousands of posts, this was not a job to be done manually! The scripts were tested extensively before running the import, to be sure everything would go smoothly.

  I also needed to import 80k blog subscribers, to be sure they wouldn't get lost in the migration (they didn't!)"
  image="/assets/img/smitten-kitchen/content-migration.png"
  alt="Screenshots of just a few of the posts on smittenkitchen.com"
%}

{% include portfolio-panel.md
  metadata="Iteration"
  heading="Listening to our users"
  content="Launching the site wasn't the end of the process. We used the launch to collect user feedback from Deb's extremely vocal readers, who helped us catch usability issues. We worked closely with her readers to find, prioritise, and resolve these issues after the launch.

  Since issues were tracked in a public GitHub repo, we actually had one reader invested enough to create a pull request and submit a fix—which I accepted gratefully!"
  image="/assets/img/smitten-kitchen/reader-feedback.png"
  alt="Screenshots of the launch post and user feedback."
%}


{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="The new site launch post collected over 500 comments, most of which were positive.

  Readers—and Deb—were delighted by the new site. People loved that the site finally worked well on mobile, that they could more easily print out recipes, and that it was easier to find the content they were looking for.

  <blockquote>Just wanted to thank you again for all of your amazing work (and I imagine, endless patience) in bringing Smitten Kitchen into the next decade.</blockquote>"
  image="/assets/img/smitten-kitchen/before-and-after.png"
  alt="Screenshots showing smittenkitchen.com before, and after, the redesign."
%}
