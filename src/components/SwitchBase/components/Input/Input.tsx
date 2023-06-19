import type { FC, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import { SwitchType } from '@/components/SwitchBase'
import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter'
import Bezel from '@/components/Bezel'
import styles from './Input.module.css'

export interface Props extends Pick<InputHTMLAttributes<HTMLElement>,
  | 'checked'
  | 'disabled'
  | 'readOnly'
> {
  name: string
  type: SwitchType
  value: string
  label?: string
  id?: string
  onChange?: (value: string) => void
}

const Input: FC<Props> = ({
  name,
  type,
  value,
  label = undefined,
  id = undefined,
  checked = false,
  onChange = undefined,
  readOnly = undefined,
  disabled = undefined,
}) => {
  label = label ?? capitalizeFirstLetter(value)
  id = id ?? value

  return (
    <label>
      <input
        name={name}
        type={type}
        value={value}
        id={id}
        checked={checked}
        onChange={onChange ? () => onChange(value) : undefined}
        readOnly={!onChange || readOnly}
        disabled={disabled}
        className="sr-only"
      />
      <Bezel checked={checked} type={type}>
        <span className={cn(
          styles['input__label'],
          checked && styles['input__label--checked']
        )}>
          {label}
        </span>
      </Bezel>
    </label>
  )
}

export default Input
