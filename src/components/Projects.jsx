import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Forge and Flame',
    description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    color: 'emerald',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Solar Tax Credit Calculator',
    description: 'E-commerce platform with payment integration, inventory management, and admin dashboard for analytics and reporting.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
    color: 'teal',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Healthcare management system designed to streamline patient records and appointment scheduling with HIPAA compliance.',
    technologies: ['Vue.js', 'Express', 'MySQL', 'Docker'],
    color: 'cyan',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Mobile-first task management app with drag-and-drop functionality, team collaboration, and progress tracking.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    color: 'blue',
    liveUrl: '#',
    githubUrl: '#',
  },
]

const colorClasses = {
  emerald: {
    tab: 'bg-emerald-600 hover:bg-emerald-500',
    card: 'bg-gradient-to-br from-emerald-950 to-emerald-900 border-emerald-600',
    badge: 'bg-emerald-800/50 text-emerald-200',
    button: 'bg-emerald-600 hover:bg-emerald-500',
  },
  teal: {
    tab: 'bg-teal-600 hover:bg-teal-500',
    card: 'bg-gradient-to-br from-teal-950 to-teal-900 border-teal-600',
    badge: 'bg-teal-800/50 text-teal-200',
    button: 'bg-teal-600 hover:bg-teal-500',
  },
  cyan: {
    tab: 'bg-cyan-600 hover:bg-cyan-500',
    card: 'bg-gradient-to-br from-cyan-950 to-cyan-900 border-cyan-600',
    badge: 'bg-cyan-800/50 text-cyan-200',
    button: 'bg-cyan-600 hover:bg-cyan-500',
  },
  blue: {
    tab: 'bg-blue-600 hover:bg-blue-500',
    card: 'bg-gradient-to-br from-blue-950 to-blue-900 border-blue-600',
    badge: 'bg-blue-800/50 text-blue-200',
    button: 'bg-blue-600 hover:bg-blue-500',
  },
}

export default function Projects() {
  // Set the first project (id: 1) as expanded by default
  const [expandedId, setExpandedId] = useState(1)
  
  // Calculate dynamic widths based on number of projects
  const numberOfProjects = projects.length
  const tabWidth = 4 // 4rem per tab
  const gapWidth = 0.5 // 0.5rem gap between tabs
  const totalTabsWidth = numberOfProjects * tabWidth + (numberOfProjects - 1) * gapWidth + 2 // +2rem for padding

  return (
    <div id="projects" className="bg-emerald-950 py-24 sm:py-32 min-h-screen relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl drop-shadow-2xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-emerald-200 drop-shadow-lg">
            Click on a project column to explore the details
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center">
          {/* Vertical Column Tabs - Using Flexbox */}
          <div className="absolute left-0 flex gap-2 z-20">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className={`${colorClasses[project.color].tab} w-16 h-[500px] rounded-lg shadow-xl cursor-pointer transition-all duration-300 relative overflow-hidden flex items-center justify-center ${
                  expandedId === project.id ? 'ring-4 ring-white scale-105' : ''
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                animate={{
                  x: expandedId === project.id ? 'calc(100vw - 22rem)' : 0,
                  transition: {
                    type: 'spring',
                    damping: 25,
                    stiffness: 150
                  }
                }}
              >
                {/* Vertical Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg whitespace-nowrap transform -rotate-180 [writing-mode:vertical-lr] drop-shadow-lg">
                    {project.title}
                  </span>
                </div>
                
                {/* Icon at top */}
                <div className="absolute top-4">
                  <CodeBracketIcon className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Expanded Scrolling Cards - Dynamic width based on project count */}
          <AnimatePresence mode="wait">
            {expandedId && (
              <motion.div
                key={expandedId}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ 
                  type: 'spring',
                  damping: 30,
                  stiffness: 200
                }}
                style={{ 
                  left: `${totalTabsWidth}rem`,
                  width: `calc(100vw - ${totalTabsWidth + 6}rem)`, // 6rem for selected tab on right + padding
                  zIndex: 10 
                }}
                className="absolute top-0 h-[500px]"
              >
                {projects
                  .filter((p) => p.id === expandedId)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      className={`${colorClasses[project.color].card} border-2 rounded-lg shadow-2xl p-8 h-full overflow-y-auto backdrop-blur-sm`}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <CodeBracketIcon className="h-8 w-8 text-white" />
                          <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                            {project.title}
                          </h3>
                        </div>
                        <button
                          onClick={() => setExpandedId(null)}
                          className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>
                      </div>

                      <p className="text-gray-100 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-300 mb-4">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className={`${colorClasses[project.color].badge} px-4 py-2 rounded-full text-sm font-medium shadow-md`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.liveUrl}
                          className={`${colorClasses[project.color].button} px-5 py-3 rounded-md text-white font-semibold shadow-lg transition-all duration-300 flex items-center gap-2`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                          View Live
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          className="bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-md text-white font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <CodeBracketIcon className="h-5 w-5" />
                          View Code
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}