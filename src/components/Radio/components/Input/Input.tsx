import type { FC } from 'react'
import cn from 'classnames'
import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter'
import Bezel from '../Bezel'
import styles from './Input.module.css'

interface Props {
  name: string
  value: string
  label?: string
  id?: string
  checked?: boolean
  onChange?: (value: string) => void
  readOnly?: boolean
  disabled?: boolean
}

const Input: FC<Props> = ({
  name,
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
        type="radio"
        value={value}
        id={id}
        checked={checked}
        onChange={onChange ? () => onChange(value) : undefined}
        readOnly={!onChange || readOnly}
        disabled={disabled}
        className="sr-only"
      />
      <Bezel checked={checked}>
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
