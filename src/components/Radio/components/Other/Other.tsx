'use client'

import { type FC, type FormEvent, useState } from 'react'
import Radio from '@/components/Radio'
import Bezel from '../Bezel'
import styles from './Other.module.css'

enum Mode {
  Pristine = 'Pristine',
  Dirty = 'Dirty',
  Focus = 'Focus',
  IsValid = 'IsValid',
}

interface Props {
  name: string
  checked?: boolean
  onSubmit?: (value: string) => void
}

const Other: FC<Props> = ({ name, checked = false, onSubmit = undefined }) => {
  const [ mode, setMode ] = useState<Mode>(Mode.Pristine)
  const [ value, setValue ] = useState<string>('')
  const [ focused, setFocused ] = useState<boolean>(false)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    setFocused(false)

    if (!onSubmit) return

    if (value) {
      onSubmit('Other: ' + value)
      setMode(Mode.IsValid)
    } else {
      onSubmit('')
      setMode(Mode.Pristine)
    }
  }

  switch (mode) {
    case Mode.Pristine:
      return (
        <button className="block w-full" onClick={() => setMode(Mode.Focus)} type="button">
          <Radio.Input name={name} label="Other" checked={checked} value={''} />
        </button>
      )
    case Mode.IsValid:
      return (
        <button className="block w-full" onClick={() => setMode(Mode.Focus)} type="button">
          <Radio.Input name={name} label={`Other: ${value}`} checked={checked} value={value}/>
        </button>
      )
    default:
      return (
        <form onSubmit={submitHandler}>
          <Bezel checked={checked} focused={focused}>
            <input
              name={name}
              type="text"
              value={value}
              onBlur={submitHandler}
              onFocus={() => setFocused(true)}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Other"
              className={styles['other__input']}
              autoFocus
            />
            <button type="submit" className={styles['other__submit']}>Ok</button>
          </Bezel>
        </form>
      )
  }
}

export default Other
