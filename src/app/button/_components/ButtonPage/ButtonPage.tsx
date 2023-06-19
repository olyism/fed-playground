import type { FC } from 'react'
import Button from '@/components/Button'
import Container, { Variant } from '@/components/Container'

const ButtonPage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <p className="my-4 text-center"><Button>Normal Button</Button></p>
      <p className="my-4 text-center"><Button disabled>Disabled Button</Button></p>
    </Container>
  </section>
)

export default ButtonPage
