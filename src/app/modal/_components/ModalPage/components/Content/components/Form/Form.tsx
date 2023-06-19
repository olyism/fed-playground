'use client'

import { type FC, useContext } from 'react'
import { type ChangeHandler, type SubmitHandler, useForm, Controller } from 'react-hook-form'
import forms from '@/app/modal/_data/forms'
import Button from '@/components/Button'
import Radio from '@/components/Radio'
import ModalContext from '../../../../ModalContext'

type FormValues = {
  selected: string
}

const Form: FC = () => {
  const { step, formData, onSetStep, onChange } = useContext(ModalContext)
  const currentForm = forms[step]

  const { inputValues } = currentForm

  const { control } = useForm<FormValues>({
    defaultValues: {
      [currentForm.name]: undefined,
    },
  })

  const changeHandler = (value: string) => {
    onChange({
      ...formData,
      [currentForm.name]: value,
    })
  }

  return (
    <div>
      <Controller
        name="selected"
        control={control}
        render={({ field: { value, name }}) => (
          <ol className="grid grid-cols-2 gap-4 w-full mb-6">
            {inputValues.map((inputValue) => (
              <li key={inputValue}><Radio.Input name={name} checked={inputValue === formData[currentForm.name]} onChange={changeHandler} value={inputValue} /></li>
            ))}
            <li><Radio.Other name={name} checked={value?.startsWith('Other:')} onSubmit={changeHandler} /></li>
          </ol>
        )}
        rules={{ required: true }}
      />
      <Button
        disabled={!formData[currentForm.name]}
        onClick={() => onSetStep && onSetStep(step + 1)}
        type="submit"
      >Continue</Button>
    </div>
  )
}

export default Form
