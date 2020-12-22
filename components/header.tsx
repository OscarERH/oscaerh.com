import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="text-xl leading-none font-extrabold tracking-tight">
                  OscarERH
                </span>
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setOpenMenu(true)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a href="#" className="font-medium text-gray-500 hover:text-black">
              Inicio
            </a>
            <a
              href="#about-me"
              className="font-medium text-gray-500 hover:text-black"
            >
              Acerca de mi
            </a>
            <a
              href="#portfolio"
              className="font-medium text-gray-500 hover:text-black"
            >
              Portafolio
            </a>
            <Link href="/blog">
              <a className="font-medium text-green hover:text-dark-green">
                Blog
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <div
        className={`${
          openMenu ? 'absolute' : 'hidden'
        } top-0 inset-x-0 z-20 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div />
            <div className="-mr-2">
              <button
                type="button"
                onClick={() => setOpenMenu(!openMenu)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1" role="none">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                role="menuitem"
              >
                Inicio
              </a>
              <a
                href="#about-me"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                role="menuitem"
              >
                Acerca de mi
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                role="menuitem"
              >
                Portafolio
              </a>
            </div>
            <div role="none">
              <Link href="/blog">
                <a
                  className="block w-full px-5 py-3 text-center font-medium text-green bg-gray-50 hover:bg-gray-100"
                  role="menuitem"
                >
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
