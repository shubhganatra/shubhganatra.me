'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Associate Applications Developer',
      company: 'Oracle Financial Services Software',
      period: 'July 2022 – July 2024',
      logo: '/oracle.png',
      logoColor: 'from-red-500 to-red-600',
      highlights: ['FinTech', 'SaaS', 'Java', 'Scala', 'JavaScript', 'GitCloud', 'REST API Tuning', 'CI/CD Automation'],
      description: 'Engineered critical FinTech SaaS products managing global banking cash flows.',
      sections: [
        {
          heading: 'Engineering Impact',
          content: 'Optimized API latency by 58% via JVM tuning and asynchronous processing, directly improving system throughput.'
        },
        {
          heading: 'Product Impact',
          content: 'Led User Acceptance Testing (UAT) for new forecasting modules, bridging the gap between technical implementation and business requirements to drive 30% user adoption.'
        },
        {
          heading: 'Automation',
          content: 'Built CI/CD scripts using Git CloudLab APIs, saving the QA team 150+ hours per sprint.'
        }
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'PricewaterhouseCoopers (PwC)',
      period: 'May 2021 – July 2021',
      logo: '/pwc.jpg',
      logoColor: 'from-amber-600 to-amber-700',
      highlights: ['Data Analytics', 'C#', 'Python', 'React', 'Business Intelligence', 'Dashboarding'],
      description: 'Spearheaded technical development for internal data tools, focusing on integrity and actionable insights.',
      sections: [
        {
          heading: 'Digital Transformation',
          content: 'Owned the end-to-end transformation of Transaction Risk Management & Fraud Detection dashboards. Evaluated technical solutions and prioritized features to visualize predictive data, improving decision-making speed by 30%.'
        },
        {
          heading: 'Engineering Resolution',
          content: 'Resolved critical C# / .NET integration bottlenecks to ensure 100% data integrity for downstream financial reporting.'
        },
        {
          heading: 'Feature Innovation',
          content: 'Engineered a custom \'Twitter Analytics\' add-on, implementing sentiment analysis algorithms to scrape and visualize real-time brand perception data for clients.'
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
