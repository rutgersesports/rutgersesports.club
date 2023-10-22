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
  const startMinutes = props.event.startTime?.getMinutes()
  const endMinutes = props.event.endTime?.getMinutes()
  const displayTime = `${props.event.startTime?.getHours()}:${startMinutes} - ${props.event.endTime?.getHours()}:${endMinutes}`

  return (
    <tr>
      <th>
        <p style={{ fontWeight: 'bold' }}>
          {startMinutes != undefined ? (
            <p style={{ margin: 0 }}>{displayTime}</p>
          ) : (
            <p style={{ margin: 0 }}>All Day</p>
          )}
        </p>
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
