'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Product Engineer',
      company: 'Oracle',
      period: 'July 2022 – July 2024',
      logo: '/oracle.png',
      logoColor: 'from-red-500 to-red-600',
      highlights: ['FinTech', 'SaaS', 'Java', 'Scala', 'Oracle SQL', 'Docker', 'Prometheus', 'CI/CD Automation'],
      description: 'Developed & managed full-stack enterprise SaaS products for Cash Flow & Asset Liability Management operations across global banks.',
      sections: [
        {
          heading: 'Engineering Impact',
          content: 'Optimized API response times by 58% (measured via Prometheus) and architected Docker-containerized backend workflows that held 99.9% production uptime on legacy microservices while integrating modern REST APIs.'
        },
        {
          heading: 'Product Impact',
          content: 'Acted as primary liaison across 4 cross-functional teams, translating product requirements into technical specs and leading User Acceptance Testing (UAT) that drove 30% user growth.'
        },
        {
          heading: 'Feature Delivery',
          content: 'Launched Pricing Margin Forecasting and Managed Rates Analysis features, turning complex JWT/XML financial data retrieval into client-facing modules with a 30% cut in latency.'
        },
        {
          heading: 'Automation',
          content: 'Built CI/CD scripts using Git CloudLab APIs, saving the QA team 150+ hours per sprint.'
        }
      ]
    },
    {
      title: 'Technology Consultant Intern',
      company: 'PricewaterhouseCoopers (PwC)',
      period: 'May 2021 – July 2021',
      logo: '/pwc.jpg',
      logoColor: 'from-amber-600 to-amber-700',
      highlights: ['Data Analytics', 'C#', 'ReactJS', 'Python', 'Fraud Detection', 'Agile'],
      description: 'Revamped Predictive Business Analytics dashboards for Transaction Risk Management, supporting client business strategy.',
      sections: [
        {
          heading: 'Digital Transformation',
          content: 'Revamped the Predictive Business Analytics dashboard for the Transaction Risk Management application, converting raw data into comprehensive graphical reports that boosted the Fraud Detection rate by 50%.'
        },
        {
          heading: 'Engineering Resolution',
          content: 'First intern in the cohort to lead a 7-member team task force, troubleshooting and resolving C# & ReactJS integration issues to eliminate application downtime.'
        },
        {
          heading: 'Feature Innovation',
          content: 'Built a Twitter Data Analytics add-on for user sentiment analysis, boosting decision speed by 30% via React, Python & Twitter APIs.'
        },
        {
          heading: 'Process Improvement',
          content: 'Enhanced team velocity by 15% by incorporating Agile project management tools like MS Project for effective KPI tracking.'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up">
          Experience
        </h2>

        <div className="space-y-8 animate-fade-in-up">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-lg border border-blue-200/30 dark:border-slate-700/50 hover:shadow-lg hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br ${exp.logoColor} p-2 overflow-hidden`}>
                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Sections for Oracle role */}
                  {exp.sections && (
                    <div className="space-y-3 mb-4">
                      {exp.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            {section.heading}:
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200/50 dark:border-blue-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
