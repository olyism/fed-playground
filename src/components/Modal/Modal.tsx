import type { FC, ReactNode } from 'react'
import Dialog from './components/Dialog'
import styles from './Modal.module.css'

interface Props {
  content?: ReactNode
  aside?: ReactNode
}

const Modal: FC<Props> = ({ content = undefined, aside = undefined }) => (
  <div className={styles.modal}>
    <Dialog content={content} aside={aside} />
  </div>
)

export default Modal
