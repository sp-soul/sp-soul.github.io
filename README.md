mrfirthy.me
===========

Version control for my personal website [https://mrfirthy.me](https://mrfirthy.me), created using [Jekyll](https://jekyllrb.com/).

---

## Local development

### Installation
Clone the repo and then run:
`bundle install`

This wil install all of the necessary dependencies. To then run the site in developement code, use:
`bundle exec jekyll serve --watch --livereload`

This will handle generating the site and CSS, and will watch for changes on either and reload the page when it detects a change.

### Adding pages
Add an HTML or Markdown file inside the root folder or a directory of your choosing. Each page should start with the following:
```
---
layout: page
title: My new page
---
```
`layout` relates to base templates found in the `_layouts` directory, and `title` is optional but affects the `<title>` tag. Jekyll will compile the page on save.

### Adding blog posts
All posts live inside the `_posts` directory. Add a new file using the following naming convention:
`YYYY-MM-DD-name-of-your-article.md`

Like the pages, every post starts with some front matter. You can add whatever you like to this, but the format I use:
```
---
layout: post
title: "Name of the article"
excerpt: "Excerpt shown on the blog index page"
date: YYYY-MM-DD
readingtime: ~X minutes
permalink: /blog/:title
tags: management octopus popular
---
```
### Adding new blog categories
Add a new markdown file to the `blog` directory. The file should be the name of the new category you want. The format is:
```
---
layout: tag
title: "Accessibility posts"
tag: accessibility
---
```
The `title` attribute is used on the blog list page when someone is viewing posts of that category.

## Styling
Jekyll has SASS compilation built-in, and styles are stored in the `_sass` directory. Any changes to files in that directory whilst working locally will cause a browser update automatically.
## Assets
I've stored them in the `static` directory, but it could be called anything. There isn't a task runner so I'd recommend minifying and o
## Can I use this site?
Absolutely! Feel free to fork the repo and use the site as a basis for your own portfolio and blog. All I asked is that you remove my blog posts, page content, and styling 👍
