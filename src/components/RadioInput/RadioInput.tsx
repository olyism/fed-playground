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
  onChange: (value: string) => void
}

const RadioInput: FC<Props> = ({
  name,
  value,
  label = undefined,
  id = undefined,
  checked = false,
  onChange
}) => {
  label = label ?? capitalizeFirstLetter(value)
  id = id ?? value

  return (
    <label>
      <input
        name={name}
        type="radio"
        value={value}
        checked={checked}
        id={id}
        className={cn('sr-only', styles['radio-input__native-radio'])}
        onChange={() => onChange(value)}
      />
      <div className={cn(styles['radio-input'], checked && styles['radio-input--checked'])}>
        <Radio checked={checked} />
        {label}
      </div>
    </label>
  )
}

export default RadioInput
