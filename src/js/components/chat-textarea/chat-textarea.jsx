import React from 'react';
import PropTypes from 'prop-types';

import './chat-textarea.scss';

import { ReactComponent as Arrow } from 'Images/arrow-right.svg';

class ChatTextArea extends React.Component {
  constructor(props) {
    super(props);

    const { placeholder, className } = this.props;

    this.state = {
      placeholder,
      className,
    };
  }

  hidePlaceholder = () => this.setState({ placeholder: '' });

  showPlaceholder = () => {
    const { placeholder } = this.props;

    this.setState({ placeholder });
  }

  render() {
    const { placeholder, className } = this.state;

    return pug`
      .input-group(className=className)
        input(onFocus=this.hidePlaceholder onBlur=this.showPlaceholder type="text", name="message" placeholder=placeholder).input
        button(type="button").send-button
          Arrow
  `;
  }
}

ChatTextArea.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

ChatTextArea.defaultProps = {
  placeholder: 'Type a message...',
  className: '',
};

export default ChatTextArea;
