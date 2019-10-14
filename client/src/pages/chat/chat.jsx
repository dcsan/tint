import React from 'react';

import UserMessage from '../../components/userMessage/UserMessage'

const message = {
  username: 'bob',
  text: 'User says hello'
}

const Chat = () => {
  return(
    <div>
      <h2>Chat</h2>
      <p>one</p>
      <p>two</p>
      <UserMessage message={ message } />
    </div>
  )
}

export default Chat
