import type { FC, ReactNode } from 'react'
import styles from './WrapperButton.module.css'

interface Props {
  children: ReactNode
  onClick: () => void
}

const Wrapper: FC<Props> = ({ children, onClick }) => (
  <button className={styles['wrapper-button']} onClick={onClick} type="button">
    {children}
  </button>
)

export default Wrapper
