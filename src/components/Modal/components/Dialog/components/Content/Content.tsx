import type { FC, ReactNode } from 'react'
import styles from './Content.module.css'

interface Props {
  content?: ReactNode
}

const Content: FC<Props> = ({ content = undefined }) => (
  <article className={styles.content}>
    <div className={styles.content__inner}>
      {content}
    </div>
  </article>
)

export default Content
