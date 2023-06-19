import type { FC } from 'react'
import Card from '@/components/Card'
import Item, { type WidgetItemProps } from './_components/Item'
import styles from './Widget.module.css'

interface Props {
  heading?: string
  items: WidgetItemProps[]
}

const Widget: FC<Props> = ({ heading, items }) => {
  const { length } = items

  return (
    <>
      {heading && <div className={styles.widget__heading}>{heading}</div>}
      <Card className={styles.widget}>
        <ul>
          {items.map((item, i) => {
            const { heading, children, avatar } = item

            return (
              <li key={`${i} ${heading}`}>
                <Item heading={heading} avatar={avatar} last={i + 1 === length}>{children}</Item>
              </li>
            )
          })}
        </ul>
      </Card>
    </>
  )
}

export default Widget
