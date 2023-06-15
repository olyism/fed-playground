import type { FC, ReactNode } from 'react'
import styles from './Card.module.css'

interface Props {
  children: ReactNode
}

const Card: FC<Props> = ({ children }) => (
  <article className={styles.card}>{children}</article>
)

export default Card
