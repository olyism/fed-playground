import type { FC } from 'react'
import SwitchBase, { type SwitchInputProps, SwitchType } from '@/components/SwitchBase'

const Input: FC<Omit<SwitchInputProps, 'type'>> = (props) => (
  <SwitchBase.Input {...props} type={SwitchType.Checkbox} />
)

export default Input
