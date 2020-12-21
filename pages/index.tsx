import { ReactElement, useState } from 'react'
import Circuit from 'components/circuit'

export default function Home(): ReactElement {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="relative bg-white overflow-hidden h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
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
                      {/* Heroicon name: menu */}
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
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-black"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-black"
                >
                  Acerca de mi
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-black"
                >
                  Portafolio
                </a>
                <a
                  href="#"
                  className="font-medium text-green hover:text-dark-green"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          <div
            className={`${
              openMenu ? 'absolute' : 'hidden'
            } top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
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
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                    role="menuitem"
                  >
                    Acerca de mi
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                    role="menuitem"
                  >
                    Portafolio
                  </a>
                </div>
                <div role="none">
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-green bg-gray-50 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
          <main className="hidden md:block mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48">
            <div className="sm:text-center  lg:text-left">
              <h1 className="uppercase tracking-wide font-extrabold text-black text-6xl">
                <span className="block text-black xl:inline text-shadow-sm">Oscar Ruiz </span>
                <span className="block text-green xl:inline text-shadow-sm">
                  Programador web
                </span>
              </h1>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute md:top-0 md:right-0 md:w-1/2">
        <Circuit/>
      </div>
      <div className="md:hidden absolute h-screen w-screen">
        <h1 className="uppercase absolute font-extrabold text-black text-5xl text-center mt-48">
          <span className="block text-black text-shadow-sm">Oscar Ruiz </span>
          <span className="block text-green text-shadow-sm">Programador web</span>
        </h1>
        <Circuit className="absolute h-full" opacity="0.1" />
      </div>
    </div>
  )
}
