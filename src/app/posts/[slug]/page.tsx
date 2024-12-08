interface PostParams {
  params: {
    slug: string;
  };
}

export default function Post({ params }: PostParams) {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Getting Started with Next.js</h1>
        <div className="text-gray-600">Posted on January 15, 2024</div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p>
          Next.js is a powerful framework for building modern web applications. 
          In this post, we'll explore how to get started with Next.js and build 
          your first application.
        </p>
        
        <h2>Why Next.js?</h2>
        <p>
          Next.js provides an excellent developer experience with features like:
        </p>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-system based routing</li>
        </ul>
      </div>
    </article>
  );
} 