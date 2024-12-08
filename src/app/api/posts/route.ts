import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, content, type, tags, date } = data;

    // 生成文件名
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-');

    const fileName = `${slug}.md`;
    const filePath = path.join(process.cwd(), 'content', type, fileName);

    // 创建 Markdown 内容
    const markdown = `---
title: "${title}"
date: "${date}"
tags: ${JSON.stringify(tags)}
---

${content}`;

    // 保存文件
    await writeFile(filePath, markdown);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json(
      { error: 'Save failed' },
      { status: 500 }
    );
  }
} 