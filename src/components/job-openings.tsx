import React from 'react'
import Link from 'next/link'
import styles from '../styles/job-openings.module.css'
import { Job, jobs } from '../data/jobs-info'

interface IDepartmentRow {
  teamName: string
  desc: string
  form: string
  row: number
}

function DepartmentRow(props: IDepartmentRow) {
  return (
    <tr className={styles['job']} key={props.row}>
      <th>
        <p style={{marginLeft: '5vw'}}>
          <strong>{props.teamName}</strong>
        </p>
        <p style={{marginLeft: '5vw'}}>{props.desc}</p>
      </th>
      <th>
        <Link href={props.form} style={{marginRight: '5vw'}}>
          <div className={styles['info-button']}>Apply</div>
        </Link>
      </th>
    </tr>
  )
}

export default function JobOpenings() {
  var row: number = 0

  function filterHidden(value: Job) {
    return !value.hidden
  }

  return (
    <div className={styles['job-openings']}>
      <h2>Rutgers Esports Executive Board Officer Recruitment Portal</h2>
      <p>
        Ready to join the Rutgers Esports Executive Board? Explore our openings below! To apply for a role not listed,
        apply <Link href="https://forms.gle/gKMwAqwSxq7u9Zbj8">here</Link>.
      </p>
      <table className={styles['job-openings-list']}>
        <tbody>
          {jobs.filter(filterHidden).map((child, i) => {
            row += 1
            return <DepartmentRow teamName={child.teamName} desc={child.desc} form={child.form} row={row} key={i} />
          })}
        </tbody>
      </table>
    </div>
  )
}
