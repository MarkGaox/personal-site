// Usage: npm run new -- "My post title"
// Creates src/content/blog/my-post-title.md with today's date, as a draft.
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Give the post a title: npm run new -- "My post title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists. Pick a different title.`);
  process.exit(1);
}
const date = new Date().toISOString().slice(0, 10);
writeFileSync(file, `---
title: ${JSON.stringify(title)}
date: ${date}
summary: ""
tags: []
draft: true
---

Start writing here.
`);
console.log(`Created ${file}. Set draft: false when it's ready to publish.`);
