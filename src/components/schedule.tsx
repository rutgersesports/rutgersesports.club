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
    const timeFormat = { hour: 'numeric', hour12: true }
    const startTime = props.event.startTime.toLocaleTimeString('en-US', timeFormat)
    const endTime = props.event.endTime?.toLocaleTimeString('en-US', timeFormat)
    displayTime = `${startTime} - ${endTime}`
  } else if (props.event.isHourly) {
    displayTime = 'Hourly'
  }

  return (
    <tr>
      <th style={{ paddingRight: '50px' }}>
        <p>{displayTime}</p>
      </th>
      <th>
        <strong>{props.event.name}</strong>
        <p>{props.event.location}</p>
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
      {props.events.map((data, key) => {
        return <ScheduleRow key={key} event={data} />
      })}
    </div>
  )
}
