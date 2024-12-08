'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import AdminCheck from '@/components/AdminCheck';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function EditorPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState<'posts' | 'notes' | 'daily'>('posts');
  const [tags, setTags] = useState('');
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  // 图片上传处理
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    try {
      setUploading(true);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.url) {
        setImages(prev => [...prev, data.url]);
        // 将图片链接添加到内容中
        setContent(prev => `${prev}\n![${file.name}](${data.url})`);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  // 提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          type,
          tags: type === 'daily' ? [] : tags.split(',').map(tag => tag.trim()),
          date: new Date().toISOString(),
          images: images,
        }),
      });

      if (response.ok) {
        router.push(`/${type}`);
      }
    } catch (error) {
      console.error('Failed to save post:', error);
    }
  };

  const renderEditor = () => {
    if (type === 'daily') {
      // 日常记录的简化界面
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder="今天发生了什么..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
              placeholder="记录你的想法..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">添加图片</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors"
            >
              选择图片
            </label>
            {uploading && <span className="ml-2 text-gray-500">上传中...</span>}
          </div>

          {/* 图片预览 */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {images.map((url, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={url}
                    alt={`上传的图片 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 技术文章和学习笔记保持原有的 Markdown 编辑器
    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">标题</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="输入文章标题..."
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">标签</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            placeholder="输入标签，用逗号分隔（例如：React, TypeScript）"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">内容</label>
          <div className="rounded-xl overflow-hidden border-2 border-gray-200">
            <MDEditor
              value={content}
              onChange={(value) => setContent(value || '')}
              height={500}
              preview="live"
              className="w-full"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <AdminCheck>
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              {type === 'daily' ? '记录生活' : '创作文章'}
            </h1>
            
            {/* 文章类型选择 */}
            <div className="flex gap-4 mb-8">
              {[
                { value: 'posts', label: '技术文章', icon: '💻' },
                { value: 'notes', label: '学习笔记', icon: '📝' },
                { value: 'daily', label: '日常记录', icon: '📅' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setType(option.value as typeof type)}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                    type === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="font-medium">{option.label}</div>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {renderEditor()}

              {/* 操作按钮 */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors rounded-xl border-2 border-gray-200 hover:border-gray-300"
                >
                  取消
                </button>
                <button
                  type="submit"
                  disabled={uploading || !title || !content}
                  className={`px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 ${
                    uploading || !title || !content
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                  }`}
                >
                  {uploading ? '保存中...' : '发布'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminCheck>
  );
} 