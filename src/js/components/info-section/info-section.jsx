import React from 'react';
import PropTypes from 'prop-types';

import './info-section.scss';

const InfoSection = ({ title, paragraph }) => pug`
  .info-section
    h1.info-section__title= title
    p.info-section__paragraph=paragraph
`;

InfoSection.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default InfoSection;
