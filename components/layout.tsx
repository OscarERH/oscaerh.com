import { ReactElement, ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className="container mx-auto px-6">
        Nav
      <main className="flex items-center">
        {children}
      </main>
    </div>
  )
}
