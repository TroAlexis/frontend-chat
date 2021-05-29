import React from 'react';
import PropTypes from 'prop-types';

import './chat-pictureset.scss';

const ChatPictureSet = ({ pictures, style }) => pug`
  .pictureset(style=style)
    each picture, index in pictures
      - const { url, alt } = picture;
      img.pictureset__img(src=require('Images/attachments/'+url+'.jpg'), alt=alt key=index)
`;

ChatPictureSet.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.any),
};

export default ChatPictureSet;
