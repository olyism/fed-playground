'use client'

import { type FC, type FormEvent, useState } from 'react'
import Bezel from '@/components/Bezel'
import SwitchBase, { SwitchType } from '@/components/SwitchBase'
import WrapperButton from './components/WrapperButton'
import styles from './Other.module.css'

enum Mode {
  Pristine = 'Pristine',
  Focus = 'Focus',
  IsValid = 'IsValid',
}

export interface Props {
  name: string
  type: SwitchType
  checked?: boolean
  onSubmit?: (value: string) => void
}

const Other: FC<Props> = ({ name, type, checked = false, onSubmit = undefined }) => {
  const [ mode, setMode ] = useState<Mode>(Mode.Pristine)
  const [ value, setValue ] = useState<string>('')

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

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
        <WrapperButton onClick={() => setMode(Mode.Focus)}>
          <SwitchBase.Input name={name} type={type} label="Other" checked={checked} value={''} />
        </WrapperButton>
      )
    case Mode.IsValid:
      return (
        <WrapperButton onClick={() => setMode(Mode.Focus)}>
          <SwitchBase.Input name={name} type={type} label={`Other: ${value}`} checked={checked} value={value}/>
        </WrapperButton>
      )
    default:
      return (
        <form onSubmit={submitHandler}>
          <Bezel checked={checked} focused={mode === Mode.Focus} type={type}>
            <input
              name={name}
              type="text"
              value={value}
              onBlur={submitHandler}
              onFocus={() => setMode(Mode.Focus)}
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
