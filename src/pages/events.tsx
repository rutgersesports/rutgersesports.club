import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'
import ImageHeader from '@/components/image-header'
import eventsImage from '../images/anthpo.jpg'
import BodyText from '@/components/body-text'

interface IEventCard {
  day: number
  month: string
  name: string
}

function EventCard(props: IEventCard) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <div style={{ padding: 20 }}>
        <>
          <p style={{ margin: 0 }}>{props.month}</p>
          <p style={{ margin: 0 }}>{props.day}</p>
        </>
      </div>
      <div>
        <p style={{ margin: 0 }}>{props.name}</p>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div className={styles['base']}>
      <NavigationBar />
      <ImageHeader title="Scarlet Knightmare" backgroundImage={eventsImage} />
      <BodyText>
        <div style={{ display: 'flex' }}>
          <div>
            <EventCard name="Scarlet Knightmare" month="Sept" day={29} />
            <EventCard name="Fireside Open" month="Sept" day={29} />
            <EventCard name="Scarlet Classic" month="Sept" day={29} />
          </div>
          <div style={{ marginLeft: '30px' }}>
            <h1>What is Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </BodyText>
      <Footer />
    </div>
  )
}
