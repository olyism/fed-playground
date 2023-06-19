'use client'

import { type FC, useContext } from 'react'
import { type ChangeHandler, type SubmitHandler, useForm, Controller } from 'react-hook-form'
import forms from '@/app/modal/_data/forms'
import Button from '@/components/Button'
import SwitchBase, { SwitchType } from '@/components/SwitchBase'
import ModalContext from '../../../../ModalContext'
import getNewData from './getNewData'

type FormValues = {
  selected: string
}

const Form: FC = () => {
  const { step, formData, onSetStep, onChange } = useContext(ModalContext)
  const { name, type, inputValues } = forms[step]
  const currentFormData = formData[name]

  const { control } = useForm<FormValues>({
    defaultValues: {
      [name]: undefined,
    },
  })

  const changeHandler = (value: string) => {
    const newData = getNewData(currentFormData, value)

    onChange({
      ...formData,
      [name]: newData,
    })
  }

  return (
    <div>
      <Controller
        name="selected"
        control={control}
        render={({ field: { name }}) => (
          <ol className="grid grid-cols-2 gap-4 w-full mb-6">
            {inputValues.map((inputValue) => { 
              const checked = type === SwitchType.Radio
                ? currentFormData === inputValue
                : currentFormData?.includes(inputValue)

              return (
                <li key={inputValue}>
                  <SwitchBase.Input 
                    name={name}
                    type={type}
                    checked={checked} 
                    onChange={changeHandler} value={inputValue} 
                  />
                </li>
              )
            })}
            <li>
              <SwitchBase.Other 
                name={name} 
                type={type}
                checked={type === SwitchType.Radio
                  ? currentFormData?.startsWith('Other:')
                  : currentFormData.find((element: string) => element.startsWith('Other:'))
                } 
                onSubmit={changeHandler} 
              />
            </li>
          </ol>
        )}
        rules={{ required: true }}
      />
      <Button
        disabled={!currentFormData?.length}
        onClick={() => onSetStep && onSetStep(step + 1)}
        type="submit"
      >Continue</Button>
    </div>
  )
}

export default Form
