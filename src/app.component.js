import React, { Component } from 'react';
import PhoneList from './phone-list/phone-list.component';

import './app.component.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  render() {
    return (
      <PhoneList/>
    );
  }
}

export default App;