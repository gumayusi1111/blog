export function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 关于部分 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">关于博客</h3>
            <p className="text-gray-300">
              分享 Web 开发技术、经验和见解，致力于帮助开发者成长。
            </p>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/posts" className="text-gray-300 hover:text-white transition-colors">
                  所有文章
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我
                </a>
              </li>
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 我的博客. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 