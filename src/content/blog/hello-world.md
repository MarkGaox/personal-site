---
title: Starting a notebook in public
date: 2026-10-29
summary: Why this site exists, and what I plan to write about here.
tags: [meta]
---

For years my notes have lived in scattered places: a text file per project, comments in pull requests, a few long Slack threads I keep searching for. This site is an attempt to pull the useful parts into one place and write them up properly.

## What to expect

Mostly long-form posts about systems work. Things like:

- How a piece of infrastructure actually behaves under load, not just how the docs say it should
- Post-mortems of bugs that took far too long to find
- Notes from papers I'm reading, with the parts I had to work out for myself

> The best way to understand something is to explain it to someone who will ask why.

## A quick formatting check

Code blocks get syntax highlighting:

```python
def backoff(attempt: int, base: float = 0.1, cap: float = 10.0) -> float:
    """Exponential backoff with full jitter."""
    import random
    return random.uniform(0, min(cap, base * 2 ** attempt))
```

Inline code like `kubectl get pods` works too, and so do tables:

| Retry | Max delay |
| ----- | --------- |
| 1     | 0.2 s     |
| 5     | 3.2 s     |
| 10    | 10 s      |

That's it for now. More soon.
