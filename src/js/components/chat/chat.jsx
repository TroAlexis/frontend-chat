import React from 'react';
import PropTypes from 'prop-types';

import MESSAGES from 'Components/chat/messages';

import ChatHeader from 'Components/chat-header/chat-header';
import ChatMessage from 'Components/chat-message/chat-message';
import ChatPictureSet from 'Components/chat-pictureset/chat-pictureset';
import ChatRadio from 'Components/chat-radio/chat-radio';
import ChatTextArea from 'Components/chat-textarea/chat-textarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatItems: MESSAGES,
    };
  }

  render() {
    const { className } = this.props;
    const { chatItems } = this.state;

    return pug`
      .chat(className=className)
        .chat__wrapper
          ChatHeader(user={
          imageUrl: 'avatar',
          name: 'Samuel Green',
          status: 'Available to Walk',
        })
          TransitionGroup.chat__messages(appear=true)
            each item, index in chatItems
              - const { type, classname,...itemProps } = item;
              CSSTransition(in=true timeout=1000 classNames="fade" key=index)
                if type.includes('message')
                  ChatMessage.chat__message(
                    styleName=type.includes('incoming')? 'chat__message--incoming': ''
                    ...itemProps
                    type=classname
                    style={transitionDelay: (index * 1.5).toString() + 's'}
                  )
                  
                else if type === 'pictureset'
                  ChatPictureSet(...itemProps style={transitionDelay: (index * 1.5).toString() + 's'})
                  
                else if type === 'radio'
                  ChatRadio.chat__radio(...itemProps style={transitionDelay: (index * 1.5).toString() + 's'})
                
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
