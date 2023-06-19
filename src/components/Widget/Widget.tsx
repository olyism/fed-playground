import type { FC } from 'react'
import Card from '@/components/Card'
import Item, { type WidgetItemProps } from './components/Item'
import styles from './Widget.module.css'

export interface Props {
  heading?: string
  items: WidgetItemProps[] | undefined
}

const Widget: FC<Props> = ({ heading = undefined, items }) => {
  return items?.length ? (
    <>
      {heading && <div className={styles.widget__heading}>{heading}</div>}
      <Card className={styles.widget}>
        <ul>
          {items.map((item, i) => {
            const { heading, children, avatar } = item

            return (
              <li key={`${i} ${heading}`}>
                <Item heading={heading} avatar={avatar} last={i + 1 === items.length}>{children}</Item>
              </li>
            )
          })}
        </ul>
      </Card>
    </>
  ) : null
}

export default Widget
