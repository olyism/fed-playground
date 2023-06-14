import { type FC, type FormEvent, useState } from 'react'
import Radio from '@/components/Radio'

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
  const [ mode, setMode ] = useState(Mode.Pristine)
  const [ value, setValue ] = useState<string>('')

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    if (!onSubmit) return

    if (value) {
      onSubmit('Other: ' + value)
      setMode(Mode.IsValid)
    } else {
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
          <input
            name={name}
            type="text"
            value={value}
            onBlur={submitHandler}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Other"
          />
          <button type="submit">Ok</button>
        </form>
      )
  }
}

export default Other
