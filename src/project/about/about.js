import React from 'react'
import AllChildren from './allChildren'
import History from './history'
import NowStore from './nowStore'
import Reasons from './reasons'
export default function About(props) {
  return (
    <>
      <div>
        <AllChildren>
          <History></History>
          <NowStore></NowStore>
          <Reasons></Reasons>
        </AllChildren>
      </div>
    </>
  )
}

