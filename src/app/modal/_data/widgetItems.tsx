import { ArrowsPointingInIcon, CurrencyDollarIcon, LifebuoyIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { WidgetItemProps } from '@/components/Widget/components/Item'
import Blockquote from '@/components/Blockquote'

export type WidgetItemsData = WidgetItemProps & {
  value?: string,
}

const widgetItems = {
  welcome: {
    items: [
      {
        heading: "Welcome, friend 👋",
        avatar: {
          color: '#ddfffa',
          children: <Image alt="Buildkite" src="buildkite.svg" height="20" width="20" />,
          isCircle: true
        },
        children: "Let’s personalize your Buildkite experience",
      },
    ],
  },
  features: {
    heading: "We think you'll love…",
    items: [
      {
        value: 'safety',
        heading: "Safety first",
        avatar: {
          color: '#F1EFFF',
          children: <ShieldCheckIcon style={{ color: "var(--purple-600)" }} height="20" width="20" />
        },
        children: "You control the environment",
      },
      {
        value: 'performance',
        heading: "Performance",
        avatar: {
          color: '#F1EFFF',
          children: <ArrowsPointingInIcon style={{ color: "var(--purple-600)" }} height="20" width="20" />
        },
        children: "It's very very fast",
      },
      {
        value: 'reduce cost',
        heading: "Reduce cost",
        avatar: {
          color: '#F1EFFF',
          children: <CurrencyDollarIcon style={{ color: "var(--purple-600)" }} height="20" width="20" />
        },
        children: "Pinch your moneyz",
      },
      {
        value: 'support',
        heading: "Support",
        avatar: {
          color: '#F1EFFF',
          children: <LifebuoyIcon style={{ color: "var(--purple-600)" }} height="20" width="20" />
        },
        children: "Follow our guides and reach out if you need help",
      },
    ],
  },
  roles: {
    heading: "Built for folks like you",
    items: [
      {
        value: 'creator',
        heading: "Jane Citizen • Creator Inc",
        avatar: {
          color: '#FFEDF9',
          isCircle: true,
          children: <Image alt="Quote icon" height="24" src="icon-quote.svg" width="24" />
        },
        children: (
          <Blockquote>This is really amazing for creators like me!</Blockquote>
        ),
      },
      {
        value: 'platformer',
        heading: "Peter Pan • Platform Pty Ltd",
        avatar: {
          color: '#FFEDF9',
          isCircle: true,
          children: <Image alt="Quote icon" height="24" src="icon-quote.svg" width="24" />
        },
        children: (
          <Blockquote>This thing has everything a platform like me needs!</Blockquote>
        ),
      },
      {
        value: 'architect',
        heading: "Ann Smith • AA Architect",
        avatar: {
          color: '#FFEDF9',
          isCircle: true,
          children: <Image alt="Quote icon" height="24" src="icon-quote.svg" width="24" />
        },
        children: (
          <Blockquote>This works brilliantly for architects like me!</Blockquote>
        ),
      },
      {
        value: 'consumer',
        heading: "Connor Summers • Consumer Watch",
        avatar: {
          color: '#FFEDF9',
          isCircle: true,
          children: <Image alt="Quote icon" height="24" src="icon-quote.svg" width="24" />
        },
        children: (
          <Blockquote>I trust this tool 100%!</Blockquote>
        ),
      },
      {
        value: 'quality assurance',
        heading: "Mr Kwan • Quantum Leap Inc",
        avatar: {
          color: '#FFEDF9',
          isCircle: true,
          children: <Image alt="Quote icon" height="24" src="icon-quote.svg" width="24" />
        },
        children: (
          <Blockquote>I feel very reassured with this!</Blockquote>
        ),
      },
    ],
  },
  letsGo: {
    items: [
      {
        heading: "You'll love it here",
        avatar: {
          color: '#ddfffa',
          children: <Image alt="Buildkite" src="buildkite.svg" height="20" width="20" />,
          isCircle: true
        },
        children: "You got all the help you need. Let's go!",
      },
    ],
  },
}

export default widgetItems
