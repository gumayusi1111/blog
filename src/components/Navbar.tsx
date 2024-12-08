'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent py-2'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`
                text-2xl font-bold transition-colors duration-300
                ${isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                  : 'text-white'
                }
              `}
            >
              我的博客
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link 
                href="/posts" 
                className={`
                  font-medium transition-colors duration-300
                  ${isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-gray-100 hover:text-white'
                  }
                `}
              >
                文章
              </Link>
              <Link 
                href="/about"
                className={`
                  font-medium transition-colors duration-300
                  ${isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-gray-100 hover:text-white'
                  }
                `}
              >
                关于
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 