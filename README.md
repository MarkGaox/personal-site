# personal-site

Xiaxuan Gao's personal site and blog, built with [Astro](https://astro.build) and published to GitHub Pages.

## Write a new post

Every Markdown file in `src/content/blog/` is a post. The file name becomes the URL, so `src/content/blog/raft-notes.md` is served at `/blog/raft-notes/`.

The quickest way to start one:

```sh
npm run new -- "Notes on Raft log compaction"
```

That creates a draft with today's date. Each post starts with a short header:

```yaml
---
title: Notes on Raft log compaction
date: 2026-11-02
summary: One sentence shown in the post list and in link previews.
tags: [distributed-systems]
draft: true   # drafts show up locally but are not published
---
```

Write the rest in normal Markdown: headings, lists, links, images, tables, quotes, and fenced code blocks with syntax highlighting. Put images in `public/images/` and link them as `/images/name.png`, or keep them next to the post and use a relative path.

When it's ready, set `draft: false` (or remove the line), commit, and push to `main`. The site rebuilds and publishes in about a minute.

## Change the home page

Your intro, links, projects, and stack all live in `src/site.ts`. To use a photo instead of the initials, put a square image at `public/avatar.jpg` and set `avatar: '/avatar.jpg'`.

## Run it locally

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Design notes

A minimal single-column layout in the spirit of the Framer "Basics" template: Inter, soft neutrals with one orange accent, a tabbed Writing / Projects / Stack section, blur-in entrance motion (skipped when reduced motion is on), a progressive blur along the bottom edge, and a floating dock with a light/dark toggle. Colors are tokens at the top of `src/styles/global.css`.
