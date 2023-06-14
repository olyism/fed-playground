'use client'

import { type FC, useState } from 'react'
import Container from '@/components/Container'
import RadioInput from '@/components/RadioInput'

const RadioInputPage: FC = () => {
  return (
    <Container>
      <RadioInput name="safety" checked />
      <RadioInput name="reduce cost" />
      <RadioInput name="performance" />
    </Container>
  )
}

export default RadioInputPage
