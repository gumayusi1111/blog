import { PostCard } from '@/components/PostCard';

const notes = [
  {
    title: "TypeScript 类型体操练习",
    excerpt: "记录一些有趣的 TypeScript 类型编程练习和心得...",
    date: "2024-01-15",
    slug: "typescript-type-challenges"
  },
  {
    title: "算法学习笔记",
    excerpt: "记录数据结构与算法的学习过程和理解...",
    date: "2024-01-10",
    slug: "algorithm-study-notes"
  }
];

export default function NotesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">学习笔记</h1>
        <div className="grid gap-8">
          {notes.map((note) => (
            <PostCard key={note.slug} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
} 