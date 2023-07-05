import type { FC, ReactNode } from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import styles from './Dialog.module.css'

interface Props {
  content?: ReactNode
  aside?: ReactNode
  children?: ReactNode
}

const Dialog: FC<Props> = ({ content = undefined, aside = undefined, children = undefined }) => (
  <div className={styles.dialog}>
    <Content content={content} />
    <Aside aside={aside} />
    {children}
  </div>
)

export default Dialog
