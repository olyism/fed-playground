'use client'

import { type FC, useState } from 'react'
import { defaultFormData } from '../../_data/forms'
import Modal from '@/components/Modal'
import Content from './components/Content'
import Aside from './components/Aside'
import Rocket from './components/Rocket'
import ModalContext, { defaultValue } from './ModalContext'

export type FormData = {
  goals: string[],
  role: string | undefined,
  tools: string[],
}

const ModalPage: FC = () => {
  const [ step, setStep ] = useState<number>(0)
  const [ formData, setFormData ] = useState<FormData>(defaultFormData)
  const [ launch, setLaunch ] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{
      ...defaultValue,
      step,
      formData,
      onSetStep: (step) => setStep(step),
      onChange: (data) => setFormData({ ...formData, ...data }),
      onLaunch: () => setLaunch(!launch)
    }}>
      <Modal content={<Content />} aside={<Aside />}>
        {launch && <Rocket />}
      </Modal>
    </ModalContext.Provider>
  )
}

export default ModalPage
