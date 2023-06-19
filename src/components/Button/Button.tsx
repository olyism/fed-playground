import type { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  emojis?: [string, string?, string?]
}

const Button: FC<Props> = ({ children, emojis = undefined, className = undefined, ...props }) => (
  <button
    className={cn(
      styles.button, 
      emojis && styles['button--has-emojis'], 
      className
    )}
    {...props}
  >
    {children}
    {emojis && [ ...emojis ].splice(0, 3).map((emoji, i) => (
      <span className={cn(styles.button__emoji, styles[`button__emoji--${i}`])} key={`${i}-${emoji}`}>{emoji}</span>
    ))}
  </button>
)

export default Button
