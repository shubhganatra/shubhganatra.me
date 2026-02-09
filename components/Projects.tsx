'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TechStack.Studio',
      oneLinier: 'Solving developer "analysis paralysis" by generating optimal tech stacks via AI.',
      description: [
        'Architected a zero-to-one platform using LangChain & Groq to generate instant architectural blueprints from vague user prompts.',
        'Tech: Designed a hot-swappable LLM backend to balance token cost vs. response latency.',
        'Product: Validated the "Blank Canvas" problem and shipped a full-stack MVP (React/FastAPI) to solve it.'
      ],
      tags: ['GenAI', 'Product Engineering', 'LLM', 'Python', 'FastAPI', 'Next.js'],
      link: 'https://techstack.studio',
      github: 'https://github.com/shubhganatra/techstack.studio'
    },
    {
      title: 'Tohfa',
      oneLinier: 'A customized gifting recommendation platform built from scratch.',
      description: [
        'Led the full product lifecycle from ideation to MVP Launch.',
        'Conducted 80+ user interviews to define the core value proposition & Customer\'s JTBD (Jobs To Be Done) map.',
        'Engineered the scalable MVP infrastructure and managed the roadmap for a cross-functional team.'
      ],
      tags: ['0-to-1', 'AI Consumer App','Customer Discovery', 'MVP Development', 'Product Strategy'],
      link: '#',
      github: '#'
    },
    {
      title: 'Furniture Fun',
      oneLinier: 'High-scale migration & dashboarding driving fast retrieval for a Furniture Sales database.',
      description: [
        'Built a MySQL ETL script to migrate CSV datasets of over 40k records, normalizing them into a strict RDBMSschema to ensure data consistency.',
        'Benchmarked query performance, identifying bottlenecks in complex SQL joins. Orchestrated a migration to NoSQL (MongoDB) to optimize for read-heavy workloads.',
        'Abandoned rigid tables for purpose-built MongoDB documents, utilizing embedding strategies over referencing to reduce lookup latency by 35%.'
      ],
      tags: ['Migration', 'RDBMS', 'SQL', 'NoSQL', 'AWS', 'MySQL', 'MongoDB'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-slate-800 rounded-lg border border-blue-200/30 dark:border-slate-700/50 hover:shadow-xl hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Header Section */}
              <div className="mb-6 h-20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold italic">
                  {project.oneLinier}
                </p>
              </div>

              {/* Description Section - Centered */}
              <div className="flex-1 flex flex-col mb-6">
                <ul className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm space-y-2">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="list-disc list-inside">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded border border-blue-200/50 dark:border-blue-800/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 group/btn"
                >
                  <span>Visit</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
