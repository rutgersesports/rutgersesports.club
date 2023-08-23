import React from 'react'
import Link from 'next/link'
import styles from '../styles/job-openings.module.css'
import { jobs } from '../data/jobs-info'

interface IDepartmentRow {
  teamName: string,
  form: string,
  row: number,
}

function DepartmentRow(props: IDepartmentRow) {
  return (
    <tr className={styles['job']} key={props.row}>
      <th scope="col" className={styles['col']}>
        <p>
          <strong>{props.teamName}</strong>
        </p>
      </th>
      <th scope="col" className={styles['col']}>
        <Link href={props.form}>
          <div className={styles['info-button']}>Learn more</div>
        </Link>
      </th>
    </tr>)
}

export default function JobOpenings() {
  var row: number = 0

  return (
    <div className={styles['job-openings']}>
      <h2>Rutgers Esports Executive Board Officer Recruitment Portal</h2>
      <p>
        Ready to join the Rutgers Esports Executive Board? Explore our openings below! To apply for a role not listed,
        apply <Link href="https://forms.gle/gKMwAqwSxq7u9Zbj8">here</Link>.
      </p>
      <table className={styles['job-openings-list']}>
        <tbody>
          {jobs.map((child, i) => {
            row += 1;
            return <DepartmentRow teamName={child.teamName} form={child.form} row={row} key={i}/>
          })}
        </tbody>
      </table>
    </div>
  )
}
