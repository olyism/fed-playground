import type { FC, ReactNode } from 'react'
import Avatar, { type AvatarProps } from '@/components/Avatar'
import styles from './Item.module.css'

export type WidgetItemProps = {
  heading: string,
  avatar?: AvatarProps,
  children: ReactNode | string,
  last?: boolean
}

const Item: FC<WidgetItemProps> = ({ heading, children, avatar = {}, last = false }) => (
  <div className={styles.item}>
    <Avatar {...avatar} className={styles['item__avatar']} />
    <div className={styles['item__content']}>
      <div className={styles['item__heading']}>{heading}</div>
      {children}
      {!last && <hr className={styles['item__divider']} />}
    </div>
  </div>
)

export default Item
