import React from 'react'
import Link from 'next/link'
import styles from '../styles/job-openings.module.css'
import { jobs } from '../data/jobs-info'

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
          {jobs.map((data, key) =>
            data.roles.map((roleData, _) => {
              row += 1
              return (
                <tr className={styles['job']} key={row}>
                  <th scope="col" className={styles['col']}>
                    <p>
                      <strong>{roleData.name}</strong>
                    </p>
                  </th>
                  <th scope="col" className={styles['col']}>
                    <p>{data.teamName}</p>
                  </th>
                  <th scope="col" className={styles['col']}>
                    <Link href={data.form}>
                      <div className={styles['info-button']}>Learn more</div>
                    </Link>
                  </th>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
