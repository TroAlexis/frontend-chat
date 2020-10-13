import React from 'react';

import './App.scss';
import InfoSection from 'Components/info-section/info-section';
import Chat from 'Components/chat/chat';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return pug`
      .main-container(className="u-container")
        Chat.chat
        InfoSection(
        title="Simple booking",
        paragraph="Stay in touch with our dog walkers through the chat interface." + 
        "This makes it easy to discuss arrangements and make bookings." + 
        "Once the walk has been completed you can rate your walker and book again all through the chat."
        ).info-section
      `;
  }
}
