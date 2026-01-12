import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="bg-emerald-950">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-400 to-teal-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-emerald-300 ring-1 ring-emerald-500/20 hover:ring-emerald-500/30 bg-emerald-900/30 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 transition-all">
              Available for new opportunities{' '}
              <a href="#contact" className="font-semibold text-emerald-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Let's connect <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <motion.h1 
              className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Software Developer with a Unique Perspective
            </motion.h1>
            <p className="mt-8 text-pretty text-lg font-medium text-emerald-200 sm:text-xl/8 drop-shadow-lg">
              Bringing 8 years of Army nursing experience into the world of software development. 
              I combine discipline, attention to detail, and a passion for problem-solving to build 
              impactful applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-400/50 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all duration-300"
              >
                View My Work
              </a>
              <a href="#about" className="text-sm/6 font-semibold text-white drop-shadow-lg hover:text-emerald-300 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-teal-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
