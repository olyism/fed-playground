import type { FC, ReactNode } from 'react'
import styles from './Blockquote.module.css'

interface Props {
  children: ReactNode
}

const Blockquote: FC<Props> = ({ children }) => (
  <blockquote className={styles.blockquote}>
    {children}
  </blockquote>
)

export default Blockquote
