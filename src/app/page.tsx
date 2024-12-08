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
    <div className="pt-16">
      <div className="space-y-16">
        {/* 主页横幅 */}
        <section className="relative py-24 bg-cover bg-center">
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
        
        {/* 特色内容 */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">前端开发</h3>
              <p className="text-gray-300">
                React、Next.js、TypeScript 等现代前端技术的深入探讨。
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">最佳实践</h3>
              <p className="text-gray-300">
                代码质量、性能优化、开发效率的实用技巧。
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">技术分享</h3>
              <p className="text-gray-300">
                实际项目经验和解决方案的分享。
              </p>
            </div>
          </div>
        </section>

        {/* 最新文章 */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-white">最新文章</h2>
            <div className="grid gap-8">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <Footer />
      </div>
    </div>
  );
} 