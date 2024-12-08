import { PostCard } from '@/components/PostCard';

const posts = [
  {
    title: "Next.js 入门指南",
    excerpt: "学习如何使用 Next.js 构建现代化的 Web 应用...",
    date: "2024-01-15",
    slug: "getting-started-nextjs"
  },
  {
    title: "为什么选择 TypeScript",
    excerpt: "探索在项目中使用 TypeScript 的优势...",
    date: "2024-01-10",
    slug: "typescript-benefits"
  },
  {
    title: "掌握 Tailwind CSS",
    excerpt: "全面了解如何高效使用 Tailwind CSS...",
    date: "2024-01-05",
    slug: "mastering-tailwind"
  }
];

export default function Posts() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">所有文章</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
} 