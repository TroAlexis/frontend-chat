import React from 'react';
import PropTypes from 'prop-types';

import './chat-message.scss';

const ChatMessage = ({
  message, type, className, style,
}) => pug`
  .chat-message(styleName=type ? "chat-message--"+type: "" className=className style=style)
    p.chat-message__text=message
`;

ChatMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

export default ChatMessage;
