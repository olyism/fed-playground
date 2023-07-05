import type { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  hasRainbow?: boolean
}

const Button: FC<Props> = ({ children, hasRainbow = false, className = undefined, ...props }) => (
  <button
    className={cn(
      styles.button, 
      hasRainbow && styles['button--has-rainbow'], 
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
