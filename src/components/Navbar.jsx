// src/components/Navbar.jsx
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', href: 'inicio' },
  { name: 'Habilidades', href: 'skills' },
  { name: 'Proyectos', href: 'projects' },
  { name: 'Contáctame', href: 'contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-slate-100 dark:bg-[#0a192f]">
      <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <ScrollLink 
          smooth={true}
          duration={1000}
          to="inicio" className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Your Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </ScrollLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={1000}
              className="text-sm font-semibold leading-6 text-white cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
          <a href="/"
          className="text-sm font-semibold leading-6 text-white cursor-pointer"
          >
            Sobre mi
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <RouterLink to="https://drive.google.com/file/d/1vwo73aUeN3Hl9Y-1jJv2LANYvBo8iv3D/view?usp=sharing" className="text-sm font-semibold leading-6 text-white" target='_blank' rel="noreferrer">
            Mira mi CV <span aria-hidden="true">&rarr;</span>
          </RouterLink> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <ScrollLink
            onClick={() => setMobileMenuOpen(false)} 
            smooth={true}
            duration={1000}
            to="inicio" className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Your Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </ScrollLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <a href="/"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
          >
            Sobre mi
          </a>
              </div>
              <div className="py-6">
                <RouterLink
                  to="https://drive.google.com/file/d/1wDv-MPHYC8Vt0CRwSVDrVRHfcQF0WmI9/view?usp=drive_link"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" target='_blank' rel="noreferrer"
                >
                  Mira mi CV
                </RouterLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navbar;
