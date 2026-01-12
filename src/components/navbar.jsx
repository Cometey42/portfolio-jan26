import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-emerald-950/80 to-transparent backdrop-blur-sm shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Tyler DeLong</span>
            <span className="text-2xl font-bold text-emerald-400 drop-shadow-lg">TD</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-emerald-200 hover:bg-emerald-900/50 transition-colors"
            aria-label="Open menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-emerald-300 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#contact" className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/50 hover:bg-emerald-400 transition-all">
            Get in Touch
          </a>
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog 
            as="div"
            open={mobileMenuOpen} 
            onClose={setMobileMenuOpen} 
            className="lg:hidden"
          >
            {/* Backdrop with fade animation */}
            <motion.div 
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-emerald-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-emerald-100/10 shadow-2xl">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5" onClick={handleNavClick}>
                    <span className="sr-only">Tyler DeLong</span>
                    <span className="text-2xl font-bold text-emerald-400">TD</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-emerald-200 hover:bg-emerald-900/50 transition-colors"
                    aria-label="Close menu"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={handleNavClick}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-emerald-900/50 transition-colors"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                    <motion.div 
                      className="py-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navigation.length * 0.1 + 0.3 }}
                    >
                      <a
                        href="#contact"
                        onClick={handleNavClick}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-emerald-900/50 transition-colors"
                      >
                        Get in Touch
                      </a>
                    </motion.div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  )
}