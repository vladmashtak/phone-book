import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhoneItem from '../phone-item/phone-item.component';
import PhoneFrom from '../phone-form/phone-form.component';
import { reset } from 'redux-form';

import './phone-list.component.css';
import { ADD_PHONE_ITEM, DELETE_PHONE_ITEM } from '../storage/actions/phone-list.actions';

class PhoneList extends Component {
  /*  constructor(props) {
      super(props);
    }*/

  render() {
    const {items, onAddPhoneNumber, onDeletePhoneNumber} = this.props;

    return (
      <div>
        <PhoneFrom onSubmit={onAddPhoneNumber}/>
        <div className='ui internally celled grid'>
          <div className='four wide column'>
            {
              items.map((item, index) => <PhoneItem key={item.key} onDelete={onDeletePhoneNumber} item={item}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  ...state.phoneList
}), (dispatch) => ({
  onAddPhoneNumber: (payload) => {
    dispatch({type: ADD_PHONE_ITEM, payload});
    dispatch(reset('phoneForm'));
  },
  onDeletePhoneNumber: (payload) => dispatch({type: DELETE_PHONE_ITEM, payload}),
}))(PhoneList);
