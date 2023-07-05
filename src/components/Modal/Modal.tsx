import type { FC, ReactNode } from 'react'
import Dialog from './components/Dialog'
import styles from './Modal.module.css'

interface Props {
  content?: ReactNode
  aside?: ReactNode
  children?: ReactNode
}

const Modal: FC<Props> = ({ content = undefined, aside = undefined, children = undefined }) => (
  <div className={styles.modal}>
    <Dialog content={content} aside={aside}>
      {children}
    </Dialog>
  </div>
)

export default Modal
