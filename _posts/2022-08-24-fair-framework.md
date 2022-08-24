---
layout: post
class: blog-entry
title: "The FAIR Framework - An approach to get you improving your accessibility quickly"
excerpt: "I’ve developed a short, four step framework for auditing and tackling the accessibility of an existing site. It’s by no means full-proof, but it’s a starting point, and sometimes that’s most of what you need."
date: 2022-08-24
readingtime: ~8 minutes
permalink: /blog/:title
tags: accessibility
---

Retrospective accessibility is hard. It’s well known that considering how people with various disabilities can access your content *whilst* you’re designing and building a site goes a long way. Components that are used throughout the site are designed with a range of needs in mind, colour schemes hit the web with contrast ratios already checked and passing. On the other hand, arriving at a site that’s been designed and built *without* these considerations can seem like a mountain to climb. Where do you even begin?

The honest answer is that it’s hard, but not impossible.

Think about the Pareto Principle (better known as the 80/20 Rule) – 80% of the deliverable from a project is achieved with 20% of the effort, and the remaining 20% will require 80% of the effort. Now it’s important to never give up on that final 20% - the very nature of accessibility is ensuring that *everyone* can access content. However, being able to get the ball rolling quickly builds up confidence in tackling issues, a greater appreciation of why it’s important, and a sense of sunk cost (you’ve gotten this far, why not go all the way?).

With this in mind, I’ve developed a short, four step framework for auditing and tackling the accessibility of an existing site. It’s by no means full-proof, but it’s a starting point, and sometimes that’s most of what you need. These steps are:

- **F** - Fundementals
- **A** - Awareness
- **I** - Implementation
- **R** - Reparations

Together, they make **FAIR**. Because that’s what it is! It’s a site that ends up being fair for everyone.

## F air - Fundamentals

We need to create a staggered approach that has practical aims from the beginning. You do this by handling the biggest, quickest wins to get your content up to a basic level. They’re the things that appear most frequently in any basic audit you would run, and tend to be the easiest ones to fix.

A BIG word of warning here - this list is not in any way designed to be all-encompassing. That being said, simply knowing where to start can sometimes be the hardest challenge, particularly when a site is fairly large. The idea is that once you’ve completed the points on this list, you can then gradually implement your newfound knowledge of access needs, barriers, and solutions to extend and evolve this plan.

There are five key areas that I have outlined below, that can be easily referred to as: **ACCESS**.

### Aesthetics

- Does the text and content of the site pass a standard WCAG colour contrast check?
- Does anything on the site rely on colour alone to convey meaning? (for example a status message, or graphs with coloured segments)
- Imagery
    - Do all images assets being displayed have `alt` tags?
    - Do purely decorative images have no alt text set, so that they are ignored by screen readers?
    - Do any images or text rely on each other for contextual meaning?
    - Are there any images with text embedded in them? (Check any content management systems for uploaded images too)
    - Is there a over-reliance on icons, and are the meanings of these clear?
- Do you have any animations on your site? If so, are they potentially excessive, too fast, distracting and/or potentially harmful to users? Could they be removed or reduced based on user preference?
- Do any videos autoplay? (they shouldn’t)
- Do any videos loop unnecessarily?
- Does the site provide users with feedback when actions occur or changes are made?
- Does the site’s design respond to a range of different devices / screen dimensions?

### Content

- Make sure that your heading structure is logical and linear, starting with an `<h1>` and moving down without skipping levels.
- Check for long bodies of text that can be condensed and moved into other formats.
- Does the content use plain language? Is it accessible for hearing impaired users, cognitive impaired users and users who experience mental health issues?
- Are there large pieces of text that are centre-aligned when they should be left aligned?
- Check if videos are being served outside of sites like YouTube and Vimeo and if so, that they handle closed captioning.

### Communication

- Do users have several ways to get in touch with you?
- Can users respond to the communications you send them?
- Can users specify the format in which they receive messages? (Plain text instead of HTML for example).

### Ease of use

This step comes in the form of tasks that you can set yourself, and you’ll be interested in the results.

- How long does a user have to wait to hear the unique or main parts of the page they’re on (if they’re on a screen reader)?
- Have you proceed a ‘skip to main content’ link on every page, that allows users to skip common content.
- Have you used the correct tags within your page (for example a `<button>` tag for a button instead of an `<a>` link tag styled to look like a button)?
- Does every form element have a label that is associated with it, that is both visible and screen reader accessible?
- Are there any areas where you could make a journey easier for the user? (for example, autocomplete on certain form inputs, breadcrumbs, setting expectations).
- Can your core journey be completed with just a keyboard? Is it clear where the user’s focus is as they move through content via a keyboard?
- Do links and actions make sense by themselves, or are there a lot of examples of ‘Next’ and ‘Click here’?

### Settings

Here we ensure that users can change or adapt parts of their experience with you to cater for their needs or preferences.

- Does the site work well when using applications like Windows High Contrast Mode?
- For those without applications like this, do you offer a way to invert or alter colour schemes?
- Does the site respond well to changes in a users font setting. If not, consider using relative units such as `em` or `rem` for your sizing and not pixels (`px`).
- Does the web page allow for zooming in general? And does it adapt to prevent the need for horizontal scrolling?
- Does content use the `lang` attribute so that it can change based on a user’s language of choice?
- Does the site adapt to other user preferences such as `prefer-reduced-motion`? LINK

### Specifics

At this point you’ve covered the main bases of not only how your site and content can be accessed by people with a range of disabilities, but you’ve also thought about your core journeys, and about how your site can adapt to its users.  You’re ready to go into individual use cases and start testing. For that, we need…

## f A ir - Awareness

Now it’s time to learn beyond the basics. It becomes a bit harder to learn what else needs to change, because we start thinking about specific access needs or scenarios (“this journey doesn’t work without a mouse”, “these colours wouldn’t work for someone with Tritanopia”). Each area offers a deep dive and a larger learning curve, but also shows what’s out there to help you, such as tools for testing and development. The way I approached this, and the way I laid out my book, is based on understanding specific access needs, the challenges users with those face, and practical things to do in order to make a site more inclusive. Here are a few:

- Blindness & low vision
- Colour blindness
- Motor disabilities
- Deafness & hard of hearing
- Cognitive impairments
- Mental health

If you’d like to make this part of your journey easier, I’ve written a book that makes those deep dives easier to engage with! It’s called “[Practical Web Inclusion & Accessibility](https://inclusive.guide/buy)”, and you can [learn more about it here](https://inclusive.guide/).

## fa I r - Implementation

Here you take what you’ve learnt to ensure your core pages and journeys are compliant with accessibility regulations, but also learn to change *how* you work to ensure moving forward everything adheres to it. This would be things like:

- Achieving AA WCAG compliance for core pages and journeys (this is the basic level of compliance, that all government sites have to adhere to)
- Having an accessibility champion in each facet of the business you work in - someone to always be asking “is this inclusive” and keeping the topic in the forefront of peoples minds
- Creating automated testing for routine accessibility issues and pitfalls
- Engaging in user testing - solo or through a company - with those who have disabilities/access needs

This is my favourite step, because the time you invest here means that all of your hard work up until this point doesn’t go to waste. With websites constantly being updated with new content, new brands, and by new developers, you could easily find that your site doesn’t quite hit the high expectations you set for it six months from now when it comes to accessibility. 

### fai R - Reparations

At this point you have a good, accessible foundation for your site, some deeper knowledge of tools and access needs, and have introduced some good practices into your workflows. Now it’s time for that final 20%! We take everything we know and throw it at the remaining content on your site that wasn’t touched in the first few steps. It’s usually pages that aren’t your core pages and journeys, but still get traffic. This includes things like:

- Old blogs
- Press releases
- Legacy features and journeys that are still used

Importantly, it’s also a good time to remove anything that *doesn’t* need to be in your site. This prevents barriers between your users and your site, and improves the general quality of what remains

## Final thoughts

Becoming accessible is great, but staying there is paramount. Because of this, it’s always useful to have a standardised approach to fall back to. Hopefully these steps can help introduce you to the topic of accessibility in a more manageable way, and help tackle the challenge of auditing an existing site.

<div class="info">
	<p>If you continue to struggle with this topic and would like some help, I've recently started consulting again. If that sounds interesting to you, you can <a href="/get-advice">learn more here</a>.</p>
</div>