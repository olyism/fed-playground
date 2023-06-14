import type { FC } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

interface Props {
  checked: boolean
}

const Radio: FC<Props> = ({ checked }) => (
  <div className="h-5 w-5 p-px">
    {checked && <CheckIcon />}
  </div>
)

export default Radio
