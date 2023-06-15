import type { FC } from 'react'
import Dialog from './components/Dialog'
import styles from './Modal.module.css'

const Modal: FC = () => (
  <div className={styles.modal}>
    <Dialog />
  </div>
)

export default Modal
