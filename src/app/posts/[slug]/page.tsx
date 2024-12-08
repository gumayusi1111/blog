interface PostParams {
  params: {
    slug: string;
  };
}

export default function Post({ params }: PostParams) {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Getting Started with Next.js</h1>
          <div className="text-gray-600">发布于 2024年1月15日</div>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800">
            <p className="text-lg leading-relaxed">
              Next.js is a powerful framework for building modern web applications. 
              In this post, we'll explore how to get started with Next.js and build 
              your first application.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Why Next.js?</h2>
            <p className="text-lg leading-relaxed">
              Next.js provides an excellent developer experience with features like:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Server-side rendering</li>
              <li>Static site generation</li>
              <li>API routes</li>
              <li>File-system based routing</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
} 