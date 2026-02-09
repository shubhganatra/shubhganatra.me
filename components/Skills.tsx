'use client';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Full-Stack Engineering',
      icon: '🔧',
      skills: ['Java', 'Spring Boot', 'Python','FastAPI','React.js', 'TypeScript', 'Next.js', 'Microservices', 'REST APIs', 'PostgreSQL', 'System Design']
    },
    {
      name: 'AI & Prototyping',
      icon: '🤖',
      skills: ['LLM Integration', 'LangChain', 'RAG Pipelines', 'Groq', 'OpenAI APIs', 'Prompt Engineering', 'Context Engineering', 'Vector DBs']
    },
    {
      name: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'EC2', 'S3', 'Docker', 'Kubernetes', 'CI/CD Automation', 'Linux', 'Bash', 'YAML']
    },
    {
      name: 'Product Strategy',
      icon: '📊',
      skills: ['0-to-1 Development', 'UAT', 'MVP Scoping', 'Technical Feasibility Analysis', 'Agile', 'Scrum', 'A/B Testing', 'User Research', 'Customer Discovery']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-lg border border-blue-200/30 dark:border-slate-700/50 hover:shadow-lg hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200/50 dark:border-blue-800/30 hover:shadow-md transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
