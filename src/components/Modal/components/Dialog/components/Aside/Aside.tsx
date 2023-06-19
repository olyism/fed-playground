import type { FC, ReactNode } from 'react'
import styles from './Aside.module.css'

interface Props {
  aside?: ReactNode
}

const Aside: FC<Props> = ({ aside = undefined }) => (
  <aside className={styles.aside}>{aside}</aside>
)

export default Aside
