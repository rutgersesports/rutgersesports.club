import styles from '../styles/body-text.module.css'

interface IBodyText {
  children: any
}

export default function BodyText(props: IBodyText) {
  return (
    <div className={styles['body-text']}>
      <div className={styles['body-content']}>{props.children}</div>
    </div>
  )
}
