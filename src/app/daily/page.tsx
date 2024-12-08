import { PostCard } from '@/components/PostCard';

const dailyPosts = [
  {
    title: "2024年学习计划",
    excerpt: "整理新的一年要学习的技术栈和目标...",
    date: "2024-01-01",
    slug: "2024-learning-plan"
  },
  {
    title: "开发环境配置记录",
    excerpt: "记录各种开发工具的配置和使用技巧...",
    date: "2023-12-31",
    slug: "dev-environment-setup"
  }
];

export default function DailyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">日常记录</h1>
        <div className="grid gap-8">
          {dailyPosts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
} 