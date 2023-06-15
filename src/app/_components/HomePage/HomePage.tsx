import type { FC } from 'react'
import Link from 'next/link'
import Container, { Variant } from '@/components/Container'

const HomePage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <nav className="text-center">
        <ul>
          <li><Link href="/radio">Radio page</Link></li>
        </ul>
      </nav>
    </Container>
  </section>
)

export default HomePage
