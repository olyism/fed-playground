import type { FC } from 'react'
import Image from 'next/image'
import Container, { Variant } from '@/components/Container'
import Widget from '@/components/Widget'

const CardPage: FC = () => (
  <section className="min-h-screen flex items-center">
    <Container variant={Variant.Inner}>
      <ul>
        <li className="my-4">
          <Widget items={[
            {
              heading: "Welcome, friend 👋",
              children: (
                <p>Let&apos;s personalize your Buildkite experience</p>
              ),
              avatar: {
                color: "#DDFFFA",
                isCircle: true,
                children: <Image alt="Buildkite" height="24" src="/buildkite.svg" width="24" />
              },
            }
          ]} />
        </li>
        <li className="my-4">
          <Widget items={[
            {
              heading: "Security",
              children: (
                <p>Secures your environment</p>
              ),
              avatar: {
                color: "#F1EFFF",
                children: <Image alt="Security icon" height="24" src="/icon-shield.svg" width="24" />
              },
            },
            {
              heading: "Super flexible",
              children: (
                <p>Generate and update workflow on the go</p>
              ),
              avatar: {
                color: "#F1EFFF",
                children: <Image alt="Flexibility icon" height="24" src="/icon-zap.svg" width="24" />
              },
            },
            {
              heading: "Unlimited scalability",
              children: (
                <p>Scale as much, or little, as you need</p>
              ),
              avatar: {
                color: "#F1EFFF",
                children: <Image alt="Scalability icon" height="24" src="/icon-pinch.svg" width="24" />
              },
            }
          ]} />
        </li>
      </ul>
    </Container>
  </section>
)

export default CardPage
