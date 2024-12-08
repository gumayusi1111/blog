import Link from 'next/link';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function PostCard({ title, excerpt, date, slug }: PostCardProps) {
  return (
    <article className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300">
      <Link href={`/posts/${slug}`} className="block">
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors">
            {title}
          </h2>
          <p className="text-gray-300 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center text-sm">
            <time dateTime={date} className="text-gray-400">
              发布于 {new Date(date).toLocaleDateString('zh-CN')}
            </time>
            <span className="ml-auto text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
              阅读全文 →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
} 