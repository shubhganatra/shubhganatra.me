'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-t border-blue-200/20 dark:border-slate-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-6">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Resume','About', 'Experience', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Resume' ? '#hero' : `#${item.toLowerCase()}`}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              {['LinkedIn', 'GitHub', 'Twitter', 'Email'].map((item) => {
                const socialLinks: { [key: string]: string } = {
                  LinkedIn: 'https://www.linkedin.com/in/shubhganatra/',
                  GitHub: 'https://github.com/shubhganatra',
                  Email: 'mailto:shubhganatra@gmail.com',
                };
                return (
                  <li key={item}>
                    <Link
                      href={socialLinks[item]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
