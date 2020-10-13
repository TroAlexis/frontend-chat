import React from 'react';
import PropTypes from 'prop-types';

import './chat-message.scss';

const ChatMessage = ({ message, type, className }) => pug`
  .chat-message(styleName=type ? "chat-message--"+type: "" className=className)
    p.chat-message__text=message
`;

ChatMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default ChatMessage;
