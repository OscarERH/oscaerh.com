import { ReactElement, useState } from 'react'
import Circuit from 'components/circuit'
import Header from 'components/header'

export default function Home(): ReactElement {
  return (
    <>
      <div className="relative bg-white overflow-hidden h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <main
              id="home"
              className="hidden md:block mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48"
            >
              <div className="sm:text-center  lg:text-left">
                <h1 className="uppercase tracking-wide font-extrabold text-black text-6xl">
                  <span className="text-black text-shadow-sm">Oscar Ruiz </span>
                  <span className="text-green text-shadow-sm">
                    Programador web
                  </span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <div className="absolute md:top-0 md:right-0 md:w-1/2">
          <Circuit />
        </div>
        <div className="md:hidden absolute h-screen w-screen">
          <h1 className="uppercase absolute font-extrabold text-black text-4xl text-center mt-48">
            <span className="block text-black text-shadow-sm">Oscar Ruiz </span>
            <span className="block text-green text-shadow-sm">
              Programador web
            </span>
          </h1>
          <Circuit className="absolute h-full" opacity="0.1" />
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              id="about-me"
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl"
            >
              Acerca de mi
            </h2>
            <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
              Mi nombre es Oscar Ruiz, soy programador web, con experiencia en
              frameworks y librerias como ReactJS, NextJS y Laravel, actualmente
              soy programador full-stack en{' '}
              <a className="text-green" target="_blank" href="http://neoma.cl/">
                Neoma
              </a>{' '}
              y desarrollador de{' '}
              <a
                className="text-green"
                target="_blank"
                href="http://omnico.app/"
              >
                Omnico
              </a>
              , un sistema de gestión de ventas multicanal basado en SaaS.
            </p>
            <p className="mt-4 max-w-4xl text-xl text-gray-500 lg:mx-auto">
              Me gustan las metodologías de desarrollo como{' '}
              <a
                className="text-green"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Test-driven_development"
              >
                TDD
              </a>
              , los lenguajes de programación de tipado estático como{' '}
              <a
                href="https://www.typescriptlang.org/"
                className="text-green"
                target="_blank"
              >
                TypeScript
              </a>
              , la arquitectura de{' '}
              <a
                className="text-green"
                href="https://en.wikipedia.org/wiki/Microservices"
                target="_blank"
              >
                microservicios
              </a>{' '}
              y actualmente me encuentro aprendiendo{' '}
              <a
                className="text-green"
                target="_blank"
                href="https://www.serverless.com/"
              >
                Serverless
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              id="portfolio"
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl"
            >
              Portafolio
            </h2>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="ml-4">
                  <dt className="text-lg font-semibold text-black">
                    <a
                      href="https://oscarerh.com"
                      className="text-green"
                      target="_blank"
                    >
                      OscarERH
                    </a>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Mi sitio personal escrito en TypeScript con NextJS.
                  </dd>
                  <div className="h-50 w-50 shadow-md">
                    <img src="https://i.imgur.com/mhkDBUG.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="ml-4">
                  <dt className="text-lg font-semibold text-black">
                    <a
                      href="https://omnico.app"
                      className="text-green"
                      target="_blank"
                    >
                      Omnico
                    </a>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Sistema de gestión de ventas multicanal basado en SaaS.
                  </dd>
                  <div className="h-50 w-50 shadow-md">
                    <img src="https://i.imgur.com/ca6c72F.png" alt="" />
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
