export default function Header() {
  return (
    <header className="top-0 lef-0 w-full z-40  fixed border-b border-gray-200">
      <nav className="flex flex-wrap justify-between mx-4 py-4 items-center">
        <div className="flex-1 text-2xl font-bold text-gray-900 tracking-tight">
          OscarERH
        </div>
        <div className="flex-1">
          <ul className="flex flex-row justify-end">
            <ul className="mr-2 hover:border-black border-white border-b-2 ransition duration-300 ease-linear transform">Inicio</ul>
            <ul className="mx-2 hover:border-black border-white border-b-2 ransition duration-300 ease-linear transform">Acerca de mi</ul>
            <ul className="mx-2 hover:border-black border-white border-b-2 ransition duration-300 ease-linear transform">Portafolio</ul>
            <ul className="mr-2 hover:border-black border-white border-b-2 ransition duration-300 ease-linear transform">Blog</ul>
          </ul>
        </div>
      </nav>
    </header>
  )
}
