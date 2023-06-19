'use client'

import { type FC, useContext } from 'react'
import Button from '@/components/Button'
import ModalContext from '@/app/modal/_components/ModalPage/ModalContext'
import forms from '@/app/modal/_data/forms'
import Form from './components/Form'
import Steps from './components/Steps'
import styles from './Content.module.css'

const Content: FC = () => {
  const { step } = useContext(ModalContext)

  return step > 2 ? (
    <div>
      <h1 className={styles['content__heading']}>You're all set!</h1>
      <p className={styles['content__paragraph']}>Up next, let's create your first project.</p>
      <p className={styles['content__paragraph']}>You'll have it up and running in 5 minutes.</p>
      <Button
        className="mt-6"
        emojis={['✨', '👷', '💚']}
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