import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({ children }) => pug`
  h1.title=children  
`;

Title.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.object],
  ),
};

export default Title;
