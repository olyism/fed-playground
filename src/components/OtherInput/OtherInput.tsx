import { type FC, type FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import RadioInput from '../RadioInput/RadioInput'

enum Mode {
  Pristine = 'Pristine',
  Dirty = 'Dirty',
  Focus = 'Focus',
  IsValid = 'IsValid',
}

type FormValues = {
  value: string
}

interface Props {
  name: string
  checked?: boolean
  onSubmit?: (value: string) => void
}

const OtherInput: FC<Props> = ({ name, checked = false, onSubmit = undefined }) => {
  const [ mode, setMode ] = useState(Mode.Pristine)
  const [ value, setValue ] = useState<string>('')

  const { handleSubmit } = useForm<FormValues>()

  // const submitHandler = onSubmit ? 
  //   handleSubmit(() => onSubmit(value)) 
  //   : undefined

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
        <button onClick={() => setMode(Mode.Focus)} type="button">
          <RadioInput name={name} checked={checked} value={''} />
        </button>
      )
    case Mode.IsValid:
      return (
        <button onClick={() => setMode(Mode.Focus)} type="button">
          <RadioInput name={name} checked={checked} value={value}/>
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

export default OtherInput
