import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import { SwitchType } from '../SwitchBase'
import Check from './components/Check'
import styles from './Bezel.module.css'

interface Props {
  children: ReactNode
  type: SwitchType
  checked?: boolean
  focused?: boolean
}

const Bezel: FC<Props> = ({ children, type, checked = false, focused = false }) => (
  <div className={cn(
    styles.bezel,
    checked && styles['bezel--checked'],
    focused && styles['bezel--focused']
  )}>
    <Check checked={checked} type={type} />
    {children}
  </div>
)

export default Bezel
