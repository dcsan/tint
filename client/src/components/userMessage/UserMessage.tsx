import React from 'react';


const UserMessage = (props: any) => {
  return (
    <div className='user-message'>
      { props.message }
    </div>
  )
}

export default UserMessage
