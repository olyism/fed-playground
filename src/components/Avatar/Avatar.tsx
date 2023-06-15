import type { FC, ReactNode } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import styles from './Avatar.module.css'
import fallbackImg from './buildkite-semi-opaque.svg'

export enum AvatarSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Base = 'Base',
  Large = 'Large',
  XLarge = 'XLarge',
}

export type AvatarProps = {
  color?: string
  size?: AvatarSize
  isCircle?: boolean
  children?: ReactNode
  className?: string
}

const getSizeClassName = (size: AvatarSize): string => {
  switch (size) {
    case AvatarSize.XSmall:
      return styles['avatar--xs']
    case AvatarSize.Small:
      return styles['avatar--sm']
    case AvatarSize.Large:
      return styles['avatar-lg']
    case AvatarSize.XLarge:
      return styles['avatar-xl']
    default:
      return ''
  }
} 

const Avatar: FC<AvatarProps> = ({
  color = undefined,
  size = AvatarSize.Base,
  isCircle = false,
  children = <Image alt="Buildkite" height="150" src={fallbackImg} width="150" />,
  className = undefined
}) => (
  <div
    className={cn(
      styles.avatar,
      getSizeClassName(size),
      isCircle && styles['avatar--is-circle'],
      className
    )}
    style={color ? { backgroundColor: color } : undefined}
  >
    {children}
  </div>
)

export default Avatar
