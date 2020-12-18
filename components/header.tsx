import { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="relative bg-black">
      <div className="mx-auto">
        <div className="flex px-4 sm:px-6 justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              className="text-xl leading-none font-extrabold tracking-tight text-white"
              href="#"
            >
              OscarERH
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setOpenMenu(true)}
              type="button"
              className=" rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
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
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <a
                href="#"
                className="text-base font-medium text-gray-200 hover:text-white"
              >
                Inicio
              </a>
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            </div>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-white"
            >
              Acerca de mi
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-white"
            >
              Portafolio
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-200 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
      {/*Mobile menu, show/hide based on mobile menu state.*/}
      <div
        className={`${
          openMenu ? '' : 'hidden'
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="-mr-2">
                <button
                  onClick={() => setOpenMenu(false)}
                  type="button"
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
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
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Inicio
                  </span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Acerca de mi
                  </span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Portafolio
                  </span>
                </a>
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Blog
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
