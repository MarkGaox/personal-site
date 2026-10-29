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

Your name, tagline, intro paragraphs, the "Lately" list, and your links all live in `src/site.ts`.

## Run it locally

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Design notes

The look is based on cyanotype prints: a Prussian-blue coat with a hand-brushed edge, cool paper, and the yellow-green of unexposed iron salts as the only accent. The home page print "develops" from yellow-green to blue once on load (skipped when reduced motion is on). Type is Bricolage Grotesque for headings and Newsreader for reading. Colors are tokens at the top of `src/styles/global.css`, and the print itself is `src/components/Print.astro`.
