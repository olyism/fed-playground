import type { FC } from 'react'
import Container, { Variant } from '@/components/Container'
import RadioInput from '@/components/RadioInput'

const RadioInputPage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <ul className="grid grid-cols-2 gap-4 w-full">
        <li><RadioInput name="safety" checked /></li>
        <li><RadioInput name="reduce cost" /></li>
        <li><RadioInput name="performance" /></li>
        <li><RadioInput name="other" /></li>
      </ul>
    </Container>
  </section>
)

export default RadioInputPage
