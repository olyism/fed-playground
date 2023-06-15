import type { FC } from 'react'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import Container, { Variant } from '@/components/Container'
import iconShield from './icon-shield.svg'
import buildkiteLogo from './buildkite.svg'

const AvatarPage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <ul className="grid grid-cols-2 gap-4 w-full">
      <li><Avatar /> Default</li>
        <li><Avatar isCircle /> Default circle</li>
        <li>
          <Avatar color="#F1EFFF">
            <Image alt="Security" height="24" src={iconShield} width="24" />
          </Avatar>
          {' '}
          Feature
        </li>
        <li>
          <Avatar color="#DDFFFA" isCircle>
            <Image alt="Buildkite" height="24" src={buildkiteLogo} width="24" />
          </Avatar>
          {' '}
          Buildkite
        </li>
      </ul>
    </Container>
  </section>
)

export default AvatarPage
