import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';

// 临时的文章数据
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

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-24 bg-cover bg-center">
        <div className="relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              欢迎来到我的博客
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              探索 Web 开发、技术分享和编程心得
            </p>
            <a 
              href="/posts" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors backdrop-blur-sm"
            >
              浏览文章
            </a>
          </div>
        </div>
      </section>

      {/* 最新文章部分 */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-white">最新文章</h2>
          <div className="grid gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 