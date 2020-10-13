import React from 'react';
import PropTypes from 'prop-types';

import './chat-radio.scss';

const ChatRadio = ({
  label, price, value, className,
}) => pug`
  .radio-group(className=className)
    .radio-group__button
      input.radio-group__input(type="radio", name="walk-length", value=value, id="walk"+price)
      label.radio-group__label(for="walk"+price)=label
      
    span.radio-group__extratext='$'+price
`;

ChatRadio.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default ChatRadio;
