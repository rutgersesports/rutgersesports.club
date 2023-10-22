import styles from '../styles/schedule.module.css'

export type ScheduleEvent = {
  name: string
  location: string
  startTime?: Date
  endTime?: Date
  isHourly?: boolean
}

interface IScheduleRow {
  event: ScheduleEvent
}

function ScheduleRow(props: IScheduleRow) {
  let displayTime = 'All Day'

  if (props.event.startTime) {
    const startTime = props.event.startTime.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
    const endTime = props.event.endTime?.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
    displayTime = `${startTime} - ${endTime}`
  } else if (props.event.isHourly) {
    displayTime = 'Hourly'
  }

  return (
    <tr>
      <th>
        <div style={{ fontWeight: 'bold' }}>
          {props.event.startTime != undefined ? (
            <p style={{ margin: 0 }}>{displayTime}</p>
          ) : (
            <p style={{ margin: 0 }}>All Day</p>
          )}
        </div>
      </th>
      <th>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{props.event.name}</p>
          <p style={{ margin: 0 }}>{props.event.location}</p>
        </div>
      </th>
    </tr>
  )
}

interface ISchedule {
  title: string
  events: Array<ScheduleEvent>
}

export default function Schedule(props: ISchedule) {
  return (
    <div>
      <h1>{props.title}</h1>
      <table className={styles['schedule']}>
        <tbody>
          {props.events.map((data, key) => {
            return <ScheduleRow key={key} event={data} />
          })}
        </tbody>
      </table>
    </div>
  )
}
