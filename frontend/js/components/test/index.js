import React from 'react'
import Message from '../Message'

const Test = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <Message {...props} />
    </div>
  )
}

export default Test
