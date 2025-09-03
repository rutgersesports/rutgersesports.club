import React from 'react'
import styles from '../styles/image-header.module.css'
import { StaticImageData } from 'next/image'

interface IImageHeader {
  title: string
  subtitle?: string
  backgroundImage: StaticImageData
}

export default function ImageHeader(props: IImageHeader) {
  return (
    <div
      className={styles['image-header']}
      style={{ backgroundImage: `url(${props.backgroundImage.src})`, backgroundRepeat: 'no-repeat' }}
    >
      <div>
        <h1>{props.title}</h1>
        {props.subtitle != null ? <h2>{props.subtitle}</h2> : <></>}
      </div>
    </div>
  )
}
