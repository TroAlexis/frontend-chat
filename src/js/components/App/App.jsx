import React from 'react';

import './App.scss';

import Title from 'Components/title/title';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return pug`
      Title Welcome!
    `;
  }
}
