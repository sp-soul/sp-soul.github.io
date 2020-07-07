---
layout: post
class: blog-entry
title: "Useful shortcuts to reduce mouse use"
excerpt: "Changing volume or brightness by smaller amounts, re-opening the tab you just closed, typing out emojis, and quite a few more."
date: 2020-07-08
readingtime: ~8 minutes
permalink: /blog/:title
tags: productivity coding
---

I’ve had a bit of wrist pain recently. It could well be because lockdown has me spending more hours than ever at a computer (who knew commuting was good for something), or that my remote setup is *just*  different enough that pressure is being put on the wrong places. Either way, I’ve been trying to use the keyboard more and the mouse less in order to reduce the “micro-movements” that using a mouse of trackpad require.

More generally though, getting to grips with shortcuts can help you move around a computer consistently quicker, and they remain useful when you’re working on a laptop and not just on a full desktop setup. This isn’t a post of one hundred shortcuts that you’ll never remember though - I’ve got a few general ones I think everyone should know, and some apps that have great ones I use many times a day.

**Forewarning** these are all for Mac. There are likely Windows equivalents for many of these (usually swapping `CMD` for `CTRL`), and the apps below definitely work on Windows, but I didn’t check thoroughly because it didn’t apply to me. Sorry!

## Mac shortcuts
### Smaller changes in Sound & brightness
I’m stunned this isn’t shared more often. Every time you hit the brightness or  volume buttons, it adjust the level by one increment. This is simple, but maybe there are times where you’d like to tweak these levels by *just a little bit*. Perhaps one volume setting isn’t quite loud enough, but the next one up is somehow just too loud. This is easily fixed by adding `Shift + Option`, and more granular control is yours!

![A keyboard showing the Shift + Option + F12 Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-shift-option-f12.png){:loading="lazy"}

`Shift + Option + F11/F12`
Change volume in smaller increments

![A keyboard showing the Shift + Option + F2 Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-shift-option-f2.png){:class="mt-img" loading="lazy"}

`Shift + Option + F1/F2`
Change brightness in smaller increments

### Taking a screenshot:
Most people know that you can take a screenshot on a mac, but there are a few ways you can do this!

![A keyboard showing the Shift + CMD + 3 Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-shift-command-3.png){:loading="lazy"}
- `CMD + Shift + 3` – Take a snapshot of your entire screen.
- `CMD + Shift + 4` – Turn your cursor into a set of crosshairs that will let you select a specific area of your screen.
- `CMD + Shift + 4 + Spacebar` – Hit these keys to screenshot only your current window (e.g., browser window, specific app, etc.) without altering its dimensions.

### General good ones
- `CMD + ~` - switch between windows of the same app
- `CMD + M` - minimising a window
- `CMD + ,` - typically brings up preferences for an application.
- `CMD + Shift + Delete` - Empty Trash (opens confirmation dialog)
- `Option + CMD + Eject` - Go to sleep

## Google Chrome
![A keyboard showing the Shift + CMD + T Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-shift-command-t.png){:loading="lazy"}

`Shift + CMD + T` re-open last closed tab (an absolute life-saver in Google Chrome

![A keyboard showing the CMD + L Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-command-l.png){:class="mt-img" loading="lazy"}

`CMD + L` Focus on address bar in Google Chrome

![A keyboard showing the Shift + Option + Arrow Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-shift-option-arrow.png){:class="mt-img" loading="lazy"}

`CMD + OPTION + ARROWS` - move between tabs (this shortcut works in most applications too)

![A keyboard showing the CMD + D Shortcut](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/keyboard-command-d.png){:class="mt-img" loading="lazy"}

`CMD + D` - Bookmark a page

## Slack
`CMD + K` is easily the best one. Using this shortcut opens fuzzy search - just start typing the name of a person or channel, and hit `Enter` when you find it!

![How Slack's fuzzy search works](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/slack-fuzzy-search.jpg){:class="mb-img" loading="lazy"}

`SHIFT + CMD + U` - Add a link to highlighted text

`:NAME_OF_EMOJI:` - A quick way to type out an emoji

I get called a nerd *regularly* for this one. Slack’s syntax for emojis (standard and custom) is a colon (`:`) then the reference name of the emoji, and then another colon. However, if you type the first colon and start typing the name of an emoji, Slack will provide you with all possible options as you type. Once you know a few common emoji names, typing them out in this way saves a lot of time over clicking or searching for the one you’re thinking of. Here is a [full list of the references that Slack uses](https://unicodey.com/emoji-data/table.htm).

![Autocomplete options being provided as someone types using the Slack emoji syntax](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/slack-emoji-syntax.jpg){:class="portrait" loading="lazy"}

It also works in WhatsApp on desktop too, which is a bonus. Come learn emoji names and be branded as a nerd like me!

The only drawback sometimes is that some of the reference names aren’t quite what you’d expect . For example, for this emoji:

⚡
{:class="emoji"}

most people (myself included) would type `lightning` or `thunder`, but its name is actually `zap`…

## Apps
A lot of my initial trouble with non-keyboard movement up until now was around searching for apps, or switching between them. `CMD + Tab` is mostly useful for switching back and forth between the two most recently used apps quickly, but when you haven’t used the app you’re looking for in a while, even this shortcut becomes arduous.

There are two neat solutions to this as far as I’m concerned - grouping your commonly used apps together somehow, and making your own custom shortcuts. Let’s look at both!

### Franz
Franz satisfies the first point. It’s a free app that essentially acts as a wrapper to a wide range of commonly used apps, thereby allowing you to have access to them all inside one application. You set them all up individually, can have as many or as few as you’d like, and change their order:

![A visual of the layout of Franz](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/franz-layout.png){:loading="lazy"}

My setup has Gmail, Slack, WhatsApp, Twitter, Messenger, and Discord. That alone is a time-saver on the constant switching between apps, but what makes it even better is that there’s a shortcut to bring up each app window depending on the order you’ve set them. So for my setup above, hitting `CMD + 1` would bring up Slack, `CMD + 2` for Gmail, `CMD + 3` for WhatsApp etc.

It’s such a game changer - less apps open, quick access to essentials and, relevant to this post, very handy shortcuts for switching between them.

### Hammerspoon
This app satisfies my second point! I was introduced to [Hammerspoon](https://www.hammerspoon.org/) recently by Karim El Khazaani in my team and I already love it. After looking through [its documentation](https://www.hammerspoon.org/docs/), it’s definitely capable of an insane amount, but I like to try using something in a few useful ways and make it a habit, and then see what else it can do.

I’m still in this first step, but with minimal effort you can set up a config file that creates a specific shortcut for *whatever* application you want. For example, here is my current config:

```
-- Setup --
local mash = {"cmd", "alt"}

-- Global keyboard shortcuts --
hs.hotkey.bind(mash, 'G', function() hs.application.launchOrFocus('Google Chrome') end)
hs.hotkey.bind(mash, 'B', function() hs.application.launchOrFocus('Bear') end)
hs.hotkey.bind(mash, 'T', function() hs.application.launchOrFocus('iTerm') end)
hs.hotkey.bind(mash, 'F', function() hs.application.launchOrFocus('Franz') end)
hs.hotkey.bind(mash, 'C', function() hs.application.launchOrFocus('Fantastical') end)
hs.hotkey.bind(mash, 'V', function() hs.application.launchOrFocus('Visual Studio Code') end)

```

With this set up I can, for example, use `CMD + OPTION + G` to head straight to Google Chrome. Think about all of the typically interactions you might use to find Google Chrome:

- 🖱 Navigated with a mouse/trackpad to the dock and click on the icon
- 🕰  `CMD + Tab` to open the application selector and cycle to Google Chrome (Could be quite a few if you have a lot of application in)
- 🖱 If it’s visible on screen, moving your cursor to the window and clicking on it
- 🖱 Clicking through the applications folder to find Google Chrome

All of those different ways - nothing consistent. In this case you can learn one shortcut, and you’re set: the shortcut  will focus you on that application or, if it isn’t open, open it for you.

### Alfred
Alfred is so epically powerful it deserves a whole post on its own. I replaced spotlight with it a while ago and regret nothing. I won’t go into every feature, but if you’d like to learn more you can  [read about it here](https://www.alfredapp.com/). It has some great features out of the box. Here are a few examples of shortcuts I use Alfred for:

#### A few useful examples
- 🔖 Google Chrome bookmarks are available through Alfred. You just search for the name you bookmarked the page under. I’ve been making heavy use of bookmarks for a little while now to cut down on all the ad-hoc searching and mouse movement around getting to certain pages - it’s a real time-saver (credit to [David Winterbottom](https://codeinthehole.com) for this one)
- 📋 You can enable a feature in Alfred that gives it access to your clipboard history, and set a shortcut to access it. I have mine set to `CMD + Option + Enter` , and it’s constantly useful once you remember it’s there.

![An example of Alfred's clipboard history feature](/static/img/posts/useful-shortcuts-to-reduce-mouse-use/alfred-clipboard-history.png){:class="portrait" loading="lazy"}
- 🛠 You can create [snippets](https://www.alfredapp.com/help/features/snippets/) to prevent having to type out the same pieces of text over and over again.
- 👩‍💻 You can add to Alfred with any useful open source plugins you come across. In a [previous post]({% post_url 2020-06-30-controlling-work-madness-with-two-apps %}) I mentioned using a Bear Alfred extension to create and search notes, but I’ve also got one to make connecting my AirPods to my MacBook quicker, and even a custom one to make searching in a website we’ve built at Octopus easier.

## Using them together
When you start building up a collection of shortcuts you use consistently across the applications on your Mac, you workflow starts to become much, much quicker.

For example, if I wanted to share an article I’d bookmarked with someone on WhatsApp, I can do the following:

- `CMD + Space` to open Alfred and type in the bookmark reference
- `CMD + L` to focus on the address bar in Google Chrome
- `CMD + C` to copy the URL
- `CMD + OPTION + F` to switch over to Franz
- `CMD + 3` to switch to WhatsApp (based on my order of apps
- `CMD + V` to paste the URL in the conversation

All of that without touching a mouse!

> In each instance it saves extra movement on a regular basis. Together though, they create a very hands-off-mouse approach to using your computer every day.
{:.answer}