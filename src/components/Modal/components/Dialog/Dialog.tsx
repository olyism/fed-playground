import type { FC } from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import styles from './Dialog.module.css'

const Dialog: FC = () => (
  <div className={styles.dialog}>
    <Content />
    <Aside />
  </div>
)

export default Dialog
