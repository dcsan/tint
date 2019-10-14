import React from 'react';
import './userMessage.css'

const UserMessage = (props: any) => {
  return (
    <div className='user-message'>
      <div className='user-name'>{ props.message.username }</div>
      { props.message.text }
    </div>
  )
}

export default UserMessage
