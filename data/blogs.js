const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    summary: "A beginner's guide to building apps with Next.js.",
    author: "Jane Doe",
    date: "2025-08-28",
    image: "/nextjs.png",
    tags: ["Next.js", "React", "Guide"],
    content: `
# Welcome to Next.js!

This is a **Markdown** blog post.

- Easy to write
- Easy to read

\`\`\`js
console.log("Hello, Markdown!");
\`\`\`
    `
  },
  {
    id: 2,
    title: "Showcasing Projects with TailwindCSS",
    summary: "How to use TailwindCSS for beautiful project showcases.",
    author: "John Smith",
    date: "2025-08-27",
    image: "/tailwind.png",
    tags: ["TailwindCSS", "Design"],
    content: `
# TailwindCSS Project Showcase

Use Tailwind to build beautiful UIs!

- Utility-first
- Responsive
- Customizable

\`\`\`css
.bg-blue-500 { background-color: #3b82f6; }
\`\`\`
    `
  }
];

export default blogs;