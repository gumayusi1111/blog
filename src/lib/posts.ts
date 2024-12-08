import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPosts(type: 'posts' | 'notes' | 'daily') {
  const directory = path.join(process.cwd(), `content/${type}`);
  const fileNames = fs.readdirSync(directory);
  
  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags,
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
} 