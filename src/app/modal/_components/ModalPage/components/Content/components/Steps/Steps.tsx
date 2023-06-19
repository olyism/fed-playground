import type { FC } from 'react'
import styles from './Steps.module.css'

interface Props {
  current: number
  max: number
}

const Steps: FC<Props> = ({ current, max }) => (
  <div className={styles.steps}>{current} / {max}</div>
)

export default Steps
