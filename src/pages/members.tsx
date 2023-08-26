import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'
import defaultAvatar from '../images/members/eboard-default.jpg'
import { ClubPosition, ClubPositionTitle, Member, clubPositionOrder, members } from '@/data/members-info'
import Image from 'next/image'

type DisplayMember = {
  name: string
  graduationYear: number | null
  position: ClubPositionTitle
  rawData: Member
}

function findStartYear() {
  let startYear: number = Infinity

  members.forEach((m: Member) => {
    m.positions.forEach((p: ClubPosition) => {
      startYear = Math.min(p.startYear, startYear)
    })
  })

  return startYear
}

function findEndYear() {
  let endYear: number = -Infinity

  members.forEach((m: Member) => {
    m.positions.forEach((p: ClubPosition) => {
      endYear = Math.max(p.endYear, endYear)
    })
  })

  return endYear
}

interface IMemberCard {
  displayMember: DisplayMember
}

function MemberCard(props: IMemberCard) {
  return (
    <div
      style={{
        backgroundColor: '#fafafa',
        margin: '15px',
        padding: '10px',
        width: '200px',
        borderRadius: '10px',
      }}
    >
      <Image
        src={defaultAvatar}
        width={170}
        alt={`Image of ${props.displayMember.name}`}
        style={{ borderRadius: '10px', margin: '10px', marginBottom: '0' }}
      />
      <div style={{ height: '65px' }}>
        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>{props.displayMember.name}</p>
        <p style={{ margin: '0' }}>{props.displayMember.position}</p>
      </div>
      <p>Class of {props.displayMember.graduationYear}</p>
    </div>
  )
}

function getMembersFromYear(year: number) {
  let outValue: Array<DisplayMember> = []
  members.map((member: Member, i: number) => {
    member.positions.map((position: ClubPosition, ii: number) => {
      if (position.startYear == year) {
        const displayMember: DisplayMember = {
          name: `${member.firstName} ${member.lastName}`,
          graduationYear: member.graduationYear,
          position: position.titleName,
          rawData: member,
        }
        outValue.push(displayMember)
      }
    })
  })
  return outValue
}

interface IMemberRow {
  startYear: number
}

function MemberRow(props: IMemberRow) {
  let members: Array<DisplayMember> = getMembersFromYear(props.startYear)
  members = members.sort((a, b) => clubPositionOrder.indexOf(a.position) - clubPositionOrder.indexOf(b.position))

  return (
    <div>
      <p style={{ fontSize: '2rem' }}>
        {props.startYear} - {props.startYear + 1}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {members.map((displayMember: DisplayMember, i: number) => {
          return <MemberCard displayMember={displayMember} key={i} />
        })}
      </div>
    </div>
  )
}

export default function HomePage() {
  const startYear: number = findStartYear()
  const endYear: number = findEndYear()

  return (
    <>
      <main className={styles['base']}>
        <NavigationBar />
        {Array(endYear - startYear)
          .fill('_')
          .map((_: number, i: number) => {
            const currentYear: number = endYear - i
            return <MemberRow startYear={currentYear - 1} key={i} />
          })}
        <Footer />
      </main>
    </>
  )
}
