'use client'

import { type FC, useContext } from 'react'
import Button from '@/components/Button'
import ModalContext from '@/app/modal/_components/ModalPage/ModalContext'
import forms from '@/app/modal/_data/forms'
import Form from './components/Form'
import Steps from './components/Steps'
import styles from './Content.module.css'

const Content: FC = () => {
  const { step, onLaunch } = useContext(ModalContext)

  return step > 2 ? (
    <div>
      <h1 className={styles['content__heading']}>You&apos;re all set!</h1>
      <p className={styles['content__paragraph']}>Up next, let&apos;s create your first project.</p>
      <p className={styles['content__paragraph']}>You&apos;ll have it up and running in 5 minutes.</p>
      <Button
        className="mt-6"
        emojis={['']}
        onClick={() => onLaunch()}
      >
        Create your project
      </Button>
    </div>
  ) : (
    <div>
      <Steps current={step + 1} max={forms.length} />
      <h1 className={styles['content__heading']}>{forms[step].heading}</h1>
      <Form />
    </div>
  )
}

export default Content
