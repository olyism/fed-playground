'use client'

import type { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Container, { Variant } from '@/components/Container'
import Radio from '@/components/Radio'

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
          render={({ field: { onChange, value, name }}) => (
            <>
              <ul className="grid grid-cols-2 gap-4 w-full">
                <li><Radio.Input name={name} checked={value === "safety"} onChange={onChange} value="safety" /></li>
                <li><Radio.Input name={name} checked={value === "performance"} onChange={onChange} value="performance" /></li>
                <li><Radio.Input name={name} checked={value === "reduce cost"} onChange={onChange} value="reduce cost" /></li>
                <li><Radio.Other name={name} checked={value.startsWith('Other:')} onSubmit={onChange} /></li>
              </ul>
              {value}
            </>
          )}
        />
      </Container>
    </section>
  )
}

export default RadioInputPage
