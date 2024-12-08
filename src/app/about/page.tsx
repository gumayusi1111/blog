export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-white">关于我</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg text-gray-100 mb-6">
          你好！我是一名热衷于 Web 开发的程序员和技术写作者。
          我创建这个博客是为了分享我在 Web 开发领域的知识和经验。
        </p>
        <p className="text-lg text-gray-100 mb-6">
          我专注于现代 Web 技术，如 React、Next.js 和 TypeScript。
          通过这个博客，我希望能帮助其他开发者在技术道路上成长。
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">技术栈</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>前端：React、Next.js、TypeScript</li>
          <li>样式：Tailwind CSS、CSS-in-JS</li>
          <li>后端：Node.js、Express</li>
          <li>数据库：PostgreSQL、MongoDB</li>
        </ul>
      </div>
    </div>
  );
} 