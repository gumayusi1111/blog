'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  likes: number;
  hasLiked: boolean;
}

export function PostCard({ id, title, excerpt, date, slug, likes: initialLikes, hasLiked: initialHasLiked }: PostCardProps) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(initialHasLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (!session) {
      // 提示用户登录
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/posts/${id}/like`, {
        method: hasLiked ? 'DELETE' : 'POST',
      });

      if (response.ok) {
        setLikes(prev => hasLiked ? prev - 1 : prev + 1);
        setHasLiked(!hasLiked);
      }
    } catch (error) {
      console.error('Failed to like post:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="ml-auto flex items-center space-x-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLike();
                }}
                disabled={isLoading}
                className={`flex items-center space-x-1 ${
                  hasLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                } transition-colors`}
              >
                <svg
                  className={`w-5 h-5 ${isLoading ? 'animate-pulse' : ''}`}
                  fill={hasLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{likes}</span>
              </button>
              <Link
                href={`/posts/${slug}#comments`}
                className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>评论</span>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 