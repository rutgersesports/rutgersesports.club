import React from 'react'
import styles from '../styles/job-openings.module.css'
import { jobs } from '../data/jobs-info'

export default function JobOpenings() {
  return (
    <div className={styles['job-openings']}>
      <h2>Rutgers Esports Executive Board Officer Recruitment Portal</h2>
      <p>
        Ready to join the Rutgers Esports Executive Board? Explore our openings below! To apply for a role not listed,
        apply <a href="https://forms.gle/gKMwAqwSxq7u9Zbj8">here</a>.
      </p>
      <table className={styles['job-openings-list']}>
        {jobs.map((data, key) =>
          data.roles.map((roleData, keyRoleData) => {
            return (
              <tr className={styles['job']} key={key}>
                <th scope="col">
                  <p>
                    <strong>{roleData.name}</strong>
                  </p>
                </th>
                <th scope="col">
                  <p>{data.teamName}</p>
                </th>
                <th scope="col">
                  <a href={data.form}>
                    <div className={styles['info-button']}>Learn more</div>
                  </a>
                </th>
              </tr>
            )
          })
        )}
      </table>
    </div>
  )
}
