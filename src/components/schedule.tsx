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
