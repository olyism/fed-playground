'use client'

import { type FC, useContext } from 'react'
import widgetItems from '@/app/modal/_data/widgetItems'
import ModalContext from '@/app/modal/_components/ModalPage/ModalContext'
import Widget from '@/components/Widget'

const Aside: FC = () => {
  const { step, formData: { goals, role } } = useContext(ModalContext)

  return (
    <ul>
      {step > 1 && (
        <li className="mb-6">
          <Widget items={widgetItems.letsGo.items} />
        </li>
      )}
      {role && (
        <li className="mb-6">
          <Widget heading={widgetItems.roles.heading} items={widgetItems.roles.items} />
        </li>
      )}
      {goals && (
        <li className="mb-6">
          <Widget
            heading={widgetItems.features.heading}
            items={widgetItems.features.items}
          />
        </li>  
      )}
      <li>
        <Widget items={widgetItems.welcome.items} />
      </li>
    </ul>
  )
}

export default Aside
