import React from 'react'
import styles from '../styles/job-openings-header.module.css'

interface IImageHeader {
  title: string
}

export default function ImageHeader(props: IImageHeader) {
  return (
    <div className={styles['job-openings-header']}>
      <h1>{props.title}</h1>
    </div>
  )
}
