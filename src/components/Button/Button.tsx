import type { FC, ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
  children: ReactNode
  disabled?: boolean
}

const Button: FC<Props> = ({ children, disabled = undefined}) => (
  <button className={styles.button} disabled={disabled} type="button">
    {children}
  </button>
)

export default Button
