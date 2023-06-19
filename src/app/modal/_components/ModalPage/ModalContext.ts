'use client'

import { createContext } from 'react'
import { defaultFormData } from '../../_data/forms'
import { type FormData } from './ModalPage'

export type ModalContextType = {
  step: number,
  formData: FormData,
  onSetStep: (step: number) => void,
  onChange: (data: FormData) => void,
  onLaunch: () => void,
}

export const defaultValue: ModalContextType = {
  step: 0,
  formData: defaultFormData,
  onSetStep: () => {},
  onChange: () => {},
  onLaunch: () => {},
}

const ModalContext = createContext<ModalContextType>(defaultValue)

export default ModalContext
