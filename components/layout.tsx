import Header from 'components/header'
import { ReactElement, ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}