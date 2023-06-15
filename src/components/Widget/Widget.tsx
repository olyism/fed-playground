import type { FC } from 'react'
import Card from '@/components/Card'
import Item, { type WidgetItemProps } from './_components/Item'
import styles from './Widget.module.css'

interface Props {
  items: WidgetItemProps[]
}

const Widget: FC<Props> = ({ items }) => {
  const { length } = items

  return (
    <Card>
      <ul>
        {items.map((item, i) => {
          const { heading, children, avatar } = item

          return (
            <li className={styles['widget__li']} key={`${i} ${heading}`}>
              <Item heading={heading} avatar={avatar} last={i + 1 === length}>{children}</Item>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default Widget
