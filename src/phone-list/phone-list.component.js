import React, { Component } from 'react';
import PhoneItem from '../phone-item/phone-item.component';

import './phone-list.component.css';

class PhoneList extends Component {
/*  constructor(props) {
    super(props);
  }*/

  onDelete = (event) => {
    console.log('item: ', event);
  };

  render() {
    return (
      <div className='ui internally celled grid'>
        <div className="four wide column">
          <PhoneItem onDelete={this.onDelete} item={null}/>
        </div>
      </div>
    );
  }
}

export default PhoneList;