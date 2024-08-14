import React from 'react';

import './Input.css';
import { FaPaperPlane } from 'react-icons/fa'
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>
      <FaPaperPlane className='icon' /></button>
  </form>
)

export default Input;