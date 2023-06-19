import type { FC } from 'react'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import Container, { Variant } from '@/components/Container'

const AvatarPage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <ul className="grid grid-cols-2 gap-4 w-full">
      <li><Avatar /> Default</li>
        <li><Avatar isCircle /> Default circle</li>
        <li>
          <Avatar color="#F1EFFF">
            <Image alt="Security" height="24" src="icon-shield.svg" width="24" />
          </Avatar>
          {' '}
          Feature
        </li>
        <li>
          <Avatar color="#DDFFFA" isCircle>
            <Image alt="Buildkite" height="24" src="buildkite.svg" width="24" />
          </Avatar>
          {' '}
          Buildkite
        </li>
      </ul>
    </Container>
  </section>
)

export default AvatarPage
