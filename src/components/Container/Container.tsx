import type { FC, ReactNode } from 'react'
import cn from 'classnames'

export enum Variant {
  Page = 'Page',
  Inner = 'Inner',
}

interface Props {
  children?: ReactNode
  variant?: Variant
}

const Container: FC<Props> = ({ children = undefined, variant = Variant.Page }) => (
  <div className={cn(
    ['mx-auto', 'px-4', 'w-full'],
    variant === Variant.Inner && ['max-w-prose', 'flex', 'flex-col', 'items-center'],
    variant === Variant.Page && 'max-w-4xl',
  )}>
    {children}
  </div>
)

export default Container

