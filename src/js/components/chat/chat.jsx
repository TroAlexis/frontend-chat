import React from 'react';
import PropTypes from 'prop-types';

import ChatHeader from 'Components/chat-header/chat-header';
import ChatMessage from 'Components/chat-message/chat-message';
import ChatPictureSet from 'Components/chat-pictureset/chat-pictureset';
import ChatRadio from 'Components/chat-radio/chat-radio';
import ChatTextArea from 'Components/chat-textarea/chat-textarea';
import './chat.scss';

const Chat = ({ className }) => pug`
  .chat(className=className)
    .chat__wrapper
      ChatHeader(user={
        imageUrl: 'avatar',
        name: 'Samuel Green',
        status: 'Available to Walk',
      })
      .chat__messages
        ChatMessage.chat__message(
          message="That sounds great. I'd be happy to discuss more."
        )
        
        ChatMessage.chat__message(
          message="Could you send over some pictures of your dog, please?"
        )

        ChatPictureSet(pictures=[
          {
            url: 'dog-image-1',
            alt: 'Sparky staring at the sky',
          },
          {
            url: 'dog-image-2',
            alt: 'Autumn Sparky girl',
          },
          {
            url: 'dog-image-3',
            alt: 'Sparky fetching a stick',
          },
        ])
        
        ChatMessage.chat__message.chat__message--incoming(
          message="Here are a few pictures. She's a happy girl!"
          type="incoming"
        )
        
        ChatMessage.chat__message.chat__message--incoming(
          message="Can you make it?"
          type="incoming"
        )
        
        ChatMessage.chat__message(
          message="She looks so happy! The time we discussed works. How long shall i take her out for?"
        )
        
        ChatRadio.chat__radio(label="30 minutes walk", price="29", value="30min")
        
        ChatRadio.chat__radio(label="1 hour walk", price="49", value="1h")
        
        ChatTextArea(placeholder="Type a message...").chat__textarea
`;

Chat.propTypes = {
  className: PropTypes.string,
};

export default Chat;
