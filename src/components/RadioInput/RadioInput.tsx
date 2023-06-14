import type { FC } from 'react'
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
    <div className={styles['radio-input']}>
      <input
        name={name}
        type="radio"
        id={id}
        checked={checked}
      />
      <Radio checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput
