import type { FC } from 'react'
import styles from './Radio.module.css'

interface Props {
  checked?: boolean
}

const Radio: FC<Props> = ({ checked = false }) => {
  const circleClasses = `
    ${styles['radio__circle']}
    ${checked ? styles['radio__circle--checked'] : styles['radio__circle--unchecked']}
  `

  return (
    <div className={styles.radio}>
      <div className={circleClasses}>{checked && (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.71094 6.8822C2.86719 7.03927 3.13281 7.03927 3.28906 6.8822L7.88281 2.2644C8.03906 2.10733 8.03906 1.84031 7.88281 1.68325L7.32031 1.1178C7.16406 0.960733 6.91406 0.960733 6.75781 1.1178L3.00781 4.88743L1.24219 3.12827C1.08594 2.9712 0.835938 2.9712 0.679688 3.12827L0.117188 3.69372C-0.0390625 3.85079 -0.0390625 4.1178 0.117188 4.27487L2.71094 6.8822Z" fill="white"/>
        </svg>        
      )}</div>
    </div>
  )
}

export default Radio
