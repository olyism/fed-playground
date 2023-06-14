import type { FC } from 'react'
import cn from 'classnames'
import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter'
import Radio from './components/Radio'
import styles from './RadioInput.module.css'

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

const RadioInput: FC<Props> = ({
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
        className={cn('sr-only', styles['radio-input__native-radio'])}
      />
      <div className={cn(styles['radio-input'], checked && styles['radio-input--checked'])}>
        <Radio checked={checked} />
        {label}
      </div>
    </label>
  )
}

export default RadioInput
