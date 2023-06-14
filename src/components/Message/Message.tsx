import type { FC } from 'react'

interface Props {
  message: string
}

const Message: FC<Props> = ({ message }) => (
  <div className="p-4 rounded bg-[var(--blue-200)]" role="alert">
    {message}
  </div>
)

export default Message
