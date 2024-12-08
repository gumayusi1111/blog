import Link from 'next/link';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function PostCard({ title, excerpt, date, slug }: PostCardProps) {
  return (
    <article className="group bg-white/70 hover:bg-white/80 backdrop-blur-md rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl">
      <Link href={`/posts/${slug}`} className="block">
        <div className="relative">
          <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
            {title}
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center text-sm">
            <time dateTime={date} className="text-gray-600">
              发布于 {new Date(date).toLocaleDateString('zh-CN')}
            </time>
            <span className="ml-auto text-gray-900 group-hover:translate-x-1 transition-transform duration-200">
              阅读全文 →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
} 