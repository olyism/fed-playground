import type { FC } from 'react'
import styles from './Dialog.module.css'

const Dialog: FC = () => (
  <div className={styles.dialog}>
    <article>Words</article>
    <aside>words</aside>
  </div>
)

export default Dialog
