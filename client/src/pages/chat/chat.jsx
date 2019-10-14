import React from 'react';

import UserMessage from '../../components/userMessage/UserMessage'

const message = {
  text: 'User says hello'
}

const Chat = () => {
  return(
    <div>
      <h2>Chat</h2>
      <p>one</p>
      <p>two</p>
      <UserMessage props={ message }>message</UserMessage>
    </div>
  )
}

export default Chat
