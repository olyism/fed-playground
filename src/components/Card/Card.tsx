import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Card.module.css'

interface Props {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = ({ children, className }) => (
  <article className={cn(styles.card, className)}>{children}</article>
)

export default Card
