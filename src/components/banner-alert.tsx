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
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '25px',
        paddingTop: '25px',
        color: 'white',
        borderColor: 'white',
        borderStyle: 'solid',
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderWidth: '1px',
        display: `${isHidden ? 'none' : 'flex'}`,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
      }}
    >
      <p style={{ margin: 0 }}>{props.msg}</p>
      <div onClick={changeVisibility} style={{ position: 'absolute', right: 0, paddingRight: '20px' }}>
        <XMarkIcon style={{ width: '25px', height: '25px' }} />
      </div>
    </div>
  )
}
