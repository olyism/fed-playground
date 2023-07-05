import type { FC } from 'react'
import styles from './Rocket.module.css'

const Rocket: FC = () => (
  <video className={styles.rocket} width="600" height="100%" autoPlay loop muted playsInline>
    <source src="rocket.webm" type="video/webm" />
    <source src="rocket.mp4" type='video/mp4; codecs="hvc1"' />
  </video>
)

export default Rocket
