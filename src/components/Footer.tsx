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
                <a 
                  href="https://github.com/Gumayusi1111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li className="text-gray-300">
                <a 
                  href="mailto:zhaojunxi222@gmail.com" 
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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