import { motion } from 'framer-motion'
import { EnvelopeIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function CallToAction() {
  return (
    <div className="bg-emerald-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl drop-shadow-2xl">
            Let's Build Something Great Together
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-emerald-100 drop-shadow-lg">
            I'm actively seeking new opportunities where I can bring my unique perspective from healthcare and military service into innovative software solutions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-xl hover:shadow-2xl hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <EnvelopeIcon className="h-5 w-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/50 hover:shadow-xl hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BriefcaseIcon className="h-5 w-5" />
              View My Projects
            </motion.a>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-emerald-800/50 p-3 shadow-lg backdrop-blur-sm">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Open to Collaborate</h3>
              <p className="mt-2 text-sm text-emerald-200">Always interested in meaningful projects</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-emerald-800/50 p-3 shadow-lg backdrop-blur-sm">
                <BriefcaseIcon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Full-Time Ready</h3>
              <p className="mt-2 text-sm text-emerald-200">Seeking full-time opportunities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-emerald-800/50 p-3 shadow-lg backdrop-blur-sm">
                <EnvelopeIcon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Quick Response</h3>
              <p className="mt-2 text-sm text-emerald-200">I'll get back to you within 24 hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}