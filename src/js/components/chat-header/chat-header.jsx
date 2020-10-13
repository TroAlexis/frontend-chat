import React from 'react';
import PropTypes from 'prop-types';

import './chat-header.scss';

const ChatHeader = ({ user }) => {
  const { imageUrl, name, status } = user;

  return pug`
    .header
      .header__wrapper
        button(type="button" ).header__button
        .avatar
          img.avatar__img(src=require('Images/userIcons/' + imageUrl + '.jpg') )
          
        .name-group
          .name-group__name=name
          .name-group__status=status
            
        span.settings
  `;
};

ChatHeader.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
};

export default ChatHeader;
