---
id: turnip
title: Turnip
order: 0
thumbnail: "/assets/img/turnip.png"
background: "/assets/img/turnip/turnip-title.png"
tags: [user research, competitive analysis, wireframing, prototyping, visual design, development direction, front-end development, usability testing, product management]
summary: A timer app designed for freelancers and small businesses. Integrations with popular bookkeeping systems.
site: https://turniptimer.com
public: true
---
{% include portfolio-panel.md
  metadata="Introduction"
  heading="The challenge"
  content="I've spent a lot of my career freelancing, so I know how important it can be to track your time accurately. Unfortunately, most of the tools that already exist for tracking time are either designed for big enterprise companies—or they just don't work all that well.
  
  I designed Turnip as a tool specifically for freelancers and small business. A simple time tracker that connects to your existing tools to free up your time for whatever it is you do best."

  image="/assets/img/turnip/main.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Iteration"
  heading="Designing a menubar app"
  content="Designing an app specifically to run in macOS's menu bar can be a tricky proposition. Early iterations used a separate app window for more complex screens, but this lead to a feeling of confusion and distortion.
  
  Eventually I realised the best way to approach it is like it's a mobile app, and working within the constraints of the menu bar drop-down window. I then redesigned all of the more complex screens to fit more readily in the space available."

  image="/assets/img/turnip/context-shot.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Data visualisation"
  heading="Where does the time go?"
  content="To give users an understanding of how they're spending their time, I designed a series of stats panels. These are broken up into daily, weekly, and monthly panels, each displaying a different type of chart and data. The stats widgets are designed to be modular, so users can customise which display based on what gives them the most helpful data."

  image="/assets/img/turnip/stats.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="User goal-setting"
  heading="A pastry-based hierarchy of rewards"
  content="Users can set a daily goal for the number of hours they'd like to work, and the interface will update with encouragement (and the promise of pastries) as they reach toward their daily goal.
  
  As a (semi-)reformed workaholic myself, I know how easy it is to fall into the trap of working compulsively to see bars fill up on a screen. I've also read enough about productivity and knowledge work that working every available hour isn't the best way to get things done.

  To account for this, I designed a series of prompts to encourage users who've met or exceeded their goal to take some downtime and recharge."

  image="/assets/img/turnip/more-stats.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Tagging"
  heading="Flattening hierarchical data structures"
  content="A big challenge with Turnip was how to represent the often overly complex hierarchical structures of Client > Project > Task that different integrations offer. The one similar app does this in a rather clunky way, so it's hard to tell where you are in the structure.
  
  I designed a tagging system for Turnip that works almost the exact same way whether you're using an integration or not. When you start a timer, you just add tags for the given timer. If you're using an integration like FreeAgent or FreshBooks, Turnip will only display the currently available tags—so for instance, you need to first choose a project from the drop-down, and then a task. It sounds complicated, but it actually just makes sense, and removes a great deal of complexity from the UI."

  image="/assets/img/turnip/tags.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Monetisation"
  heading="Building affordances for upgrades"
  content="Turnip's primary currency is time. This means that free users only see a week of history, whilst paid users see more history. With this in mind, I built in upgrade prompts whenever a users' subscription didn't support viewing all their data.
  
  I built upgrade flows for all possible combinations of user upgrade paths, ensuring that users would always be returned to the data they were trying to see when they encountered the upgrade prompt. That way, the purchase feels seamless and the user can focus on accomplishing their task."

  image="/assets/img/turnip/upgrade-prompt.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Empty state design"
  heading="Accounting for errors"
  content="Most of Turnip's UI is focussed on showing your time data in various different configurations, so it would be easy for it to feel broken to new users. To account for this, I designed empty states for every screen that would otherwise be empty—tags, accounts, calendar, stats, etc—for a new user, and included prompts to explain to users how to see data on those screens.
  
  I also designed empty states for specifically for users who've already tracked time, but are taking a holiday or break. This way, nothing ever feels broken or unfinished."

  image="/assets/img/turnip/empty-state.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Error design"
  heading="A better blank page"
  content="I paid a great deal of attention to error states, so the app never feels broken, even if you're offline or something's gone wrong.
  
  Offline performance is extremely reliable—changes are saved in the background, and synced next time the user is online. This happens seamlessly in the background, but I also designed indicator icons and tooltips to allow users to see what's happening in the process. I also built in a Refresh Accounts feature to allow impatient users some manual control."

  image="/assets/img/turnip/offline.png"
  alt=""
%}

{% include portfolio-panel.md
  metadata="Outcomes"
  heading="What did I accomplish?"
  content="Turnip is available in both the FreshBooks App Store and FreeAgent's Integrations. Initial user feedback from both FreshBooks and FreeAgent users has been positive, and the app is gaining users and mentions."
  image="/assets/img/turnip/integrations.png"
  alt="App Store feature, and other badges."
%}
