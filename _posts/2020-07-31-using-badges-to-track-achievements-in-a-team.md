---
layout: post
class: blog-entry
title: "Using badges to track achievements in a team"
excerpt: "One of the big motivations was making sure that all of the great energy people brought to our workplace was directed in the best way possible, and in a way that kept people curious and challenged."
date: 2020-07-31
readingtime: ~9 minutes
permalink: /blog/:title
tags: management productivity
---

The other week [Gilly](https://twitter.com/SoEclecticGames) in my team threw an idea into my head. It was fleeting but really got my attention. She had mentioned that her and her partner [Rob](https://twitter.com/robpercival87), an ex-Google engineer who is now with us at Octopus Energy, had been reminiscing on a “badge” system they used there to reward effort and pursuits in a range of different areas. She mentioned that it had really stuck with those working there, and people were soon working hard in areas they hadn’t before in order to achieve them. Of course Google is a massive company, but I was interested in whether the same concept could apply, somewhat tweaked, to smaller teams.

So I did some reading...

## Context
First a small bit of context. When the Front-end team reached a decent size recently, I created sub teams. It’s probably possible to write an entire separate post around this so I won’t go into it fully now, but in my infinite wisdom (and adolescence) I named them after the three original starters from Pokemon: Bulbasaur, Charmander, and Squirtle.

Say what you like, but in terms of creating a naming convention that will scale well, it holds up - there are, at the time of writing this, **890 pokemon** (seriously).

This is the only time I’ll thank Nintendo for rinsing the Pokemon franchise.

So when I started thinking about a framework like badges, I wanted to extend the Pokemon theme just a little bit more. After all, Pokemon trainers earn badges by defeating gym leaders of various types and difficulties.

![Illustrations of the eight Kanto badges from Pokemon](/static/img/posts/using-badges-to-track-achievements-in-a-team/pokemon-badges-kanto.png){:loading="lazy"}

The idea for the team was slightly simpler - that badges could be earned through various deeds in a range of different areas, culminating in a thorough understanding of what it means to be a Front-end developer at Octopus Energy.

> What did you want to achieve?
{:.question}

The motivation is that they would be a point of pride as the team gets bigger, but also to distinguish who had obtained relevant experience in certain areas. This way new starters would have a handy steering point on who to talk to about a particular area. Most importantly though, they would act as a neat way to extend the initial onboarding process we have in Front-end. Overall I’d say we’re pretty good at getting people set up, sharing knowledge, and exposing newcomers to our way of working. However, where we could be a little better is assuring that everyone gets the full range of experience, and avoiding the tricky repeating cycle of a particular developer handling a job or area, and then being doomed to do that same job nearly every time it comes up.

To be clear, my team already do phenomenal work. This isn’t an issue of reduced productivity of disengagement. Far from it in fact:

> One of the big motivations was making sure that all of the great energy people brought to our workplace was directed in the best way possible, and in a way that kept people curious and challenged.
{:.answer}

Now, every person has personal targets that we work on and discuss monthly but these tend to be longer term ones, and with the priorities of the business being ever-changing, you can’t guarantee that you can please everyone all the time, certainly as you get bigger. What you can do though, is provide a range of different areas for people to excel and progress, which are *always* useful to them, and *always* useful to the business - ones where the time being spent on them is never questioned by the either side. I think everyone strives to get a little better every day, and what I wanted to make sure with the badges concept was that there was somewhere to place that energy and enthusiasm after the excitement of the first few months at Octopus Energy starts to die down. You want to avoid complacency and the feeling of stagnation that could set in, sometimes by accident.

So these don’t replace personal goals and targets - they compliment them. It's simply designed to provide common areas and shared experiences. You'll be able to display each badge you earn on your Slack profile now by hitting edit profile and pasting the badge in, and for new people joining, it's a handy reference to know who has experience in certain areas should they need someone to chat to.


## Would that even work in my team?
I asked the same question.

Now at Google, there were apparently multiple web interfaces, and clever infrastructure around something like this for google - they really invested in it.  The result? People were doing work they’d never do usually to obtain badges. It makes sense, as research has shown that after a certain point money doesn’t motivate people in the same way.

Turns out there’s a lot more to it than simply occupying a fairly fulfilled brain though. An awful lot of research has gone into why badges and achievements work so effectively at winning (and keeping) our attention. Jamie Madigan is a doctor of psychology and an expert in the psychology around games ([he wrote the book on it!](https://www.amazon.com/Getting-Gamers-Psychology-Impact-People/dp/1538121336/). He has identified [8 key things](https://www.psychologyofgames.com/2016/07/why-do-achievements-trophies-and-badges-work/) that allow badges to work as a successful framework:

- ⬆️ They anchor our performance expectations higher (this is also why the first badge is easy to get - it gets people started quicker)
- 👀 Having goals increases our self efficacy (having attainable criteria for badges and seeing peers who already have them makes it feel achievable)
- 🥰 Completing goals leads to satisfaction (and when we feel good, we want more of it - get all the badges!)
- 🏃‍♀️ They create goal commitment (again, particularly powerful if the first badge is attainable - like a loyalty card that starts with a couple of stamps, you’re more likely to come back to complete it)
- 🔄 They act as guidance mechanics and provide feedback (badge criteria helps people understand what is required of them)
- 🧠 They facilitate psychological flow through feedback (the sweet spot between effort & ability)
- 🥳 They trigger social proof (the more people doing it, the more intense the feeling to do it too)
- 💫 They trigger motivating social comparisons (they help benchmark our progress against others)

They work everywhere. I’ve seen them most effectively used in education, where school programs (or any online learning tool really) provides them after completed sections or exercises. To use just coding as an example, you see them used in everything from the [Khan Academy](https://www.khanacademy.org/badges), [Team Treehouse](https://blog.teamtreehouse.com/inside-treehouse-badges), to [Udemy](https://support.udemy.com/hc/en-us/articles/229605188-Udemy-Badges-Guide). All of them cite a combination of the above points, and they’ve also seen increased engagement across the board through their use.

Because of all of this, and the conversations I had with people who had experienced them, I tried to create a system that would apply to my team.


## How to show them
A big part of the badges framework is the ability to show them off. It creates a sense of community, and friendly competition at the same time. We, like a lot of other companies, utilise slack for company-wide communication, and so that felt like the perfect place to allow developers to show them off to everyone!

One thing I learnt from this was that you can create new custom fields for Slack profiles across a workspace, and they’ll sit alongside other handy info whenever someone views your profile.

![Badges being displayed in emoji form on a slack profile](/static/img/posts/using-badges-to-track-achievements-in-a-team/badges-slack-profile.jpg){:loading="lazy"}

One drawback from this is that, although you can make custom emojis, the profile fields are just plain text and so won’t accept images or slacks own emoji syntax. We can get pretty close with regular emojis though!

## What are the badges?
I’m going to speak vaguely about the badges we’re using so they’re more generally applicable:

#### 🗿 Boulder badge
Submit your first PR.

#### 💧 Cascade badge
Add a new feature to the front-end and announce it.

#### ⚡️ Thunder badge
Give 3 talks to the team.

#### 🌈 Rainbow badge
Work as part of a large project from start to finish.

#### 💗 Soul badge
Work alongside operations to make our systems better.

#### 🟡 Marsh badge
Reach 100 merged PR's.

#### 🔥 Volcano badge
Take ownership of, and solve, a certain number of outages.

#### 🌿 Earth badge
Be at Octopus Energy for one year.

You’ll notice that only one of these is time based, but the idea is that the original eight would be achievable within that time.

## Extending the concept
Like the team names, the badges concept also has room to manoeuvre in terms of growth - there are 6 Pokemon ‘regions’, each holding 8 badges (finding a way to represent all of them in emojis would be a challenge, but that’s future me’s problem…). That makes 48 potential badges in total. If you’re looking at adding achievements for different areas of a business, you could actually follow the idea of regions and keep them separate, but as a good starter having 8 consistent achievements for everyone works perfectly for a small - medium sized team in my opinion.

Now, anyone that knows the Pokemon games will tell you that, after collecting the 8 badges of a region, you move on to face the **“elite four”**. These 4 represent the toughest challenge in the game, and are followed by a showdown with the Pokemon league champion. With that in mind, I added “stretch goals” in terms of 5 extra badges that would typically act as additional achievements to chase after someone’s first year at Octopus. These are designed to be *much* harder to get, but having them carries a little extra presitge.

These could be similar to previous badges but with much higher numbers associated (much more PR reviews), but also tackling something out of their traditional job role / wheelhouse. For me I added answering a certain amount of customer emails (it’s hugely important for devs to understand what ops handle and go through), helping to develop our fledgling graphic APIs, and even contribute towards the recruitment process by marking code tests and helping with screening interviews. All things designed to get a person involved in the *company* and not just the department they’re in.

### The "Elite Four" badges
#### 🧊 Elite four 1
Secret

#### 👊 Elite four 2
Also a secret

#### 👻 Elite four 3
This one is a ghost (and also a secret)

#### 🐲 Elite four 4
A dragon-y secret

The final badge (the Pokemon equivalent of the league champion) is running a team in front-end, where they help train and encourage the next wave of front-end developers to chase the badges.

🎖
{:.emoji}

I’ve deliberately avoided setting achievements that would encourage unhealthy behaviour (pull an all nighter, answer a weekend call etc.). It goes without saying, but still...

As with a few things in the department, it’s entirely optional. It would be tough to enforce this across the board (especially as, without proper infrastructure in place to monitor it,  you need to rely on the people involved being engaged enough with it to check themselves:

> did I merge my 100th PR yet? I think I'm close!
{:.question}

> One more talk and I’ll get my Thunder badge
{:.answer}


## Advantages
It’s very early doors, but I’ve already found it interesting in a few ways:
- 🥳 People in my team have mentioned going after badges already in a way they didn’t expect that they would
- 🤔 We now have a clear idea for myself and the dev of areas that they haven’t tackled yet in their time in Octopus
- 🏅 We’ve found that these are showcasing gaps that even veterans in the team have! My team leads are a few badges away from having them all, so it’s been great to see them want to collect them all and learn too!
- 📈 It’s provided a way for people to take initiative in certain areas should they feel the desire to do so, without those areas being plucked out at random depending on the current circumstances
- 💬 Because of the above, I’m receiving unprompted messages from people to get them moving on badges they don’t have
- ✅ It’s been adopted by nearly everyone in the team

Time will tell if this concept has legs, but at the very least it provides consistency that can hold up as the team gets better.