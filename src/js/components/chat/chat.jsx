import React from 'react';
import PropTypes from 'prop-types';

import ChatHeader from 'Components/chat-header/chat-header';
import ChatMessage from 'Components/chat-message/chat-message';
import ChatPictureSet from 'Components/chat-pictureset/chat-pictureset';
import ChatRadio from 'Components/chat-radio/chat-radio';
import ChatTextArea from 'Components/chat-textarea/chat-textarea';
import { CSSTransition } from 'react-transition-group';
import './chat.scss';

class Chat extends React.Component {
  render() {
    const { className } = this.props;

    return pug`
      .chat(className=className)
        .chat__wrapper
          ChatHeader(user={
          imageUrl: 'avatar',
          name: 'Samuel Green',
          status: 'Available to Walk',
        })
          .chat__messages
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatMessage.chat__message(
                message="That sounds great. I'd be happy to discuss more."
                style={transitionDelay: '0.5s'}
              )
              
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatMessage.chat__message(
                message="Could you send over some pictures of your dog, please?"
                style={transitionDelay: '2.5s'}
              )
              
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
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
              ],
              style={transitionDelay: '4.5s'})
              
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatMessage.chat__message.chat__message--incoming(
                message="Here are a few pictures. She's a happy girl!"
                type="incoming"
                style={transitionDelay: '5.5s'}
              )
            
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatMessage.chat__message.chat__message--incoming(
                message="Can you make it?"
                type="incoming"
                style={transitionDelay: '7s'}
              )
              
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatMessage.chat__message(
                message="She looks so happy! The time we discussed works. How long shall i take her out for?"
                style={transitionDelay: '9s'}
              )
            
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatRadio.chat__radio(label="30 minutes walk", price="29", value="30min" style={transitionDelay: '12s'})
            
            CSSTransition(in=true, appear=true, timeout=1000 classNames="fade")
              ChatRadio.chat__radio(label="1 hour walk", price="49", value="1h" style={transitionDelay: '12s'})
            
            ChatTextArea(placeholder="Type a message...").chat__textarea
  `;
  }
}

Chat.propTypes = {
  className: PropTypes.string,
};

Chat.defaultProps = {
  className: '',
};

export default Chat;
