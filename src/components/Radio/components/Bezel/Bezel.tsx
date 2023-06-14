import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import Check from '../Check'
import styles from './Bezel.module.css'

interface Props {
  children: ReactNode
  checked?: boolean
  focused?: boolean
}

const Bezel: FC<Props> = ({ children, checked = false, focused = false }) => (
  <div className={cn(
    styles.bezel,
    checked && styles['bezel--checked'],
    focused && styles['bezel--focused']
  )}>
    <Check checked={checked} />
    {children}
  </div>
)

export default Bezel
