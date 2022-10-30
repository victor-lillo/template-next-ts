import React from 'react'
import classnames from 'classnames-creator'
import styles from './ComponentTemplate.module.scss'

export default function ComponentTemplate({ text }: { text: string }) {
  const handleClick = () => {
    console.log('Your text is:', text)
  }

  return (
    <button onClick={handleClick} className={styles.container}>
      {text}
    </button>
  )
}
