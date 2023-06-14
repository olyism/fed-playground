import type { FC, ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Frontend playground',
  description: 'Generated by create next app',
}

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en">
    <body className="text-alias-base font-sans">
      <main>
        {children}
      </main>
    </body>
  </html>
)

export default RootLayout
