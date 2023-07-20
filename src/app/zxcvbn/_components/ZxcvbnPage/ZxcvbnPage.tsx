'use client'

import { type FC, useEffect, useState } from 'react'
import zxcvbn, { type ZXCVBNScore } from 'zxcvbn'
import cn from 'classnames'
import StrengthIndicator from './components/StrengthIndicator'

export type Score = null | ZXCVBNScore

const ZxcvbnPage: FC = () => {
  const [ password, setPassword ] = useState<string>('')
  const [ score, setScore ] = useState<Score>(null)

  useEffect(() => {
    if (!password) {
      setScore(null)
    } else {
      const { score } = zxcvbn(password)
      setScore(score)
    }
  }, [password])

  return (
    <section className="p-10">
      <div className="flex flex-wrap gap-1 max-w-sm text-sm">
        <label className="font-semibold grow" htmlFor="password">Password</label>
        <input
          className={cn(
            ['px-4', 'py-2', 'basis-full'],
            ['border', 'border-gray-600', 'rounded'],
            'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)_inset]',
            'order-last'
          )}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <StrengthIndicator score={score} />
      </div>
    </section>
  )
}

export default ZxcvbnPage
