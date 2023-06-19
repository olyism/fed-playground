'use client'

import { type FC, useState } from 'react'
import { defaultFormData } from '../../_data/forms'
import Modal from '@/components/Modal'
import Content from './components/Content'
import Aside from './components/Aside'
import ModalContext, { defaultValue } from './ModalContext'

export type FormData = {
  goals: string[],
  role: string | undefined,
  tools: string[],
}

const ModalPage: FC = () => {
  const [ step, setStep ] = useState<number>(0)
  const [ formData, setFormData ] = useState<FormData>(defaultFormData)

  return (
    <ModalContext.Provider value={{
      ...defaultValue,
      step,
      formData,
      onSetStep: (step) => setStep(step),
      onChange: (data) => setFormData({ ...formData, ...data })
    }}>
      <Modal content={<Content />} aside={<Aside />} />
    </ModalContext.Provider>
  )
}

export default ModalPage
