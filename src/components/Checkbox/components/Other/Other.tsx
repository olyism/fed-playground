import type { FC } from 'react'
import SwitchBase, { type SwitchOtherProps, SwitchType } from '@/components/SwitchBase'

const Other: FC<Omit<SwitchOtherProps, 'type'>> = (props) => (
  <SwitchBase.Other {...props} type={SwitchType.Checkbox} />
)

export default Other
