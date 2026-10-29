// Edit this file to change what the home page says about you.

export const site = {
  name: 'Xiaxuan Gao',
  firstName: 'Xiaxuan',
  title: 'Xiaxuan Gao',
  description: 'Xiaxuan Gao writes about systems, machine learning infrastructure, and the things in between.',
  // Shown under "Hey, I'm …" on the home page.
  intro: 'I’m a software engineer working on the systems underneath machine learning: inference runtimes, distributed storage, and the networks between them. I write here about what I build and what I learn.',
  // Put a square photo at public/avatar.jpg and set this to '/avatar.jpg'.
  avatar: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/MarkGaox', icon: 'github' },
    { label: 'X', href: 'https://x.com/XiaxuanG', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/MarkGaox', icon: 'linkedin' },
    { label: 'RSS', href: '/rss.xml', icon: 'rss' },
  ],
  projects: [
    { name: 'vllm-metal', blurb: 'Running vLLM inference on Apple silicon through Metal.', href: 'https://github.com/MarkGaox/vllm-metal' },
    { name: 'Xline', blurb: 'A geo-distributed key-value store built on the CURP consensus protocol.', href: 'https://github.com/MarkGaox/Xline' },
    { name: 'Helix', blurb: 'Serving large language models across heterogeneous GPU clusters.', href: 'https://github.com/MarkGaox/helix' },
  ],
  stack: ['Rust', 'Python', 'C++', 'CUDA', 'Metal', 'PyTorch', 'Kubernetes', 'DPDK'],
};
