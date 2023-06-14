'use client'

import type { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Container, { Variant } from '@/components/Container'
import OtherInput from '@/components/OtherInput'
import RadioInput from '@/components/RadioInput'

type FormValues = {
  selected: string
}

const RadioInputPage: FC = () => {
  const { control } = useForm<FormValues>({
    defaultValues: {
      selected: '',
    },
  })

  return (
    <section className="min-h-screen flex items-center">
      <Container variant={Variant.Inner}>
        <Controller
          name="selected"
          control={control}
          render={({ field: { onChange, value }}) => (
            <ul className="grid grid-cols-2 gap-4 w-full">
              <li><RadioInput name="selected" checked={value === "safety"} onChange={onChange} value="safety" /></li>
              <li><RadioInput name="selected" checked={value === "performance"} onChange={onChange} value="performance" /></li>
              <li><RadioInput name="selected" checked={value === "reduce cost"} onChange={onChange} value="reduce cost" /></li>
              <li><RadioInput name="selected" checked={value === "flexibility"} onChange={onChange} value="flexibility" /></li>
            </ul>
          )}
        />
      </Container>
    </section>
  )
}

export default RadioInputPage
