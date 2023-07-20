import type { FC } from 'react'
import type { Score } from '../../../ZxcvbnPage'
import cn from 'classnames'
import formatLabel from './formatLabel'

interface Props {
  score: Score
}

const StrengthIndicator: FC<Props> = ({ score }) => (
  <aside aria-label="Password strength" className="h-5 flex gap-2 items-center">
    {score !== null && (
      <span className={cn(
        score === 0 && 'text-red-600',
        score > 1 && 'text-green-600',
      )}>
        {formatLabel(score)}
      </span>
    )}
    <div aria-hidden className="h-1 w-10 bg-gray-200 rounded">
      {score !== null ? (
        <div className={cn(
          'h-1',
          'transition-width',
          score === 0 && 'w-1/4 bg-red-600',
          score === 1 && 'w-1/2 bg-amber-300',
          score === 2 && 'w-3/4 bg-green-600',
          score > 2 && 'w-full bg-green-600',
        )}></div>
      ) : null}
    </div>
  </aside>
)

export default StrengthIndicator
