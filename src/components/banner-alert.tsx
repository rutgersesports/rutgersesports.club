import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

interface IAlertBanner {
  msg: string
}

export default function AlertBanner(props: IAlertBanner) {
  const [isHidden, setHidden] = useState<boolean>(false)

  function changeVisibility() {
    setHidden(!isHidden)
  }

  return (
    <div
      style={{
        backgroundColor: '#d62929',
        padding: '3vh',
        color: 'white',
        borderColor: 'white',
        borderStyle: 'solid',
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderWidth: '1px',
        display: `${isHidden ? 'none' : 'flex'}`,
        alignItems: 'center',
        justifyContent: 'space-between', // Add this line
      }}
    >
      <p style={{ margin: 0, flex: 1 }}>{props.msg}</p>
      <div onClick={changeVisibility}>
        <XMarkIcon style={{ width: '25px', height: '25px' }} />
      </div>
    </div>
  )
}
