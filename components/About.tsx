'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
          About Me
        </h2>

        <div className="animate-fade-in-up">
          {/* Text Content */}
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              I don't just write code; I build products that solve real-world problems.
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">My foundation is in Scalable Engineering.</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At Oracle, I managed enterprise SaaS products handling millions of transactions. But I didn't just fix bugs, I optimized User Experience, tuning APIs to cut latency by 58% because I believe performance is the ultimate user feature.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">I also focus heavily on Developer Experience.</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My goal is to make building easier for architects. At Oracle, I saved 150+ hours of Dev Time per sprint by Automating testing processes to make sure Developers spend their time building features rather than completing repetitive, manual tasks.
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Now, I operate at the intersection of System Design and Product Strategy. I specialize in 0-to-1 development, leveraging Generative AI to translate complex technical capabilities into intuitive, user-centric tools. I bring the technical rigor to build scalable systems and the product vision to ensure they deliver tangible business value.
            </p>
          </div>

          {/* Stats as List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+ Years</div>
              <p className="text-gray-600 dark:text-gray-400">Enterprise Experience</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200/50 dark:border-indigo-800/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">150+ Hours</div>
              <p className="text-gray-600 dark:text-gray-400">Dev Time Conserved in a Sprint</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200/50 dark:border-purple-800/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-400">0-to-1 Feature & Product Launches</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-100/50 to-rose-100/50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg border border-pink-200/50 dark:border-pink-800/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">58%</div>
              <p className="text-gray-600 dark:text-gray-400">API Latency Reduced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
