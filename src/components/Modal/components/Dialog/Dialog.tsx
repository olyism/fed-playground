import type { FC, ReactNode } from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import styles from './Dialog.module.css'

interface Props {
  content?: ReactNode
  aside?: ReactNode
}

const Dialog: FC<Props> = ({ content, aside }) => (
  <div className={styles.dialog}>
    <Content content={content} />
    <Aside aside={aside} />
  </div>
)

export default Dialog
