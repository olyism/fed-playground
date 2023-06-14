import type { FC } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import capitalizeFirstLetter from '@/lib/capitalizeFirstLetter'
import Radio from './components/Radio'
import styles from './RadioInput.module.css'

interface Props {
  name: string
  label?: string
  value?: string
  checked?: boolean
  id?: string
}

const RadioInput: FC<Props> = ({
  name,
  label = undefined,
  value = undefined,
  checked = false,
  id = undefined,
}) => {
  label = label ?? capitalizeFirstLetter(name)
  id = id ?? uuidv4()
  value = value ?? name

  return (
    <label className={cn(
      styles['radio-input'],
      checked && styles['radio-input--checked']
    )}>
      <input
        name={name}
        type="radio"
        id={id}
        checked={checked}
        className={styles['radio-input__native-radio']}
      />
      <Radio checked={checked} />
      {label}
    </label>
  )
}

export default RadioInput
