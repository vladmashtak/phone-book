import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhoneItem from '../phone-item/phone-item.component';
import PhoneFrom from '../phone-form/phone-form.component';
import { initialize } from 'redux-form';

import './phone-list.component.css';
import { ADD_PHONE_ITEM, DELETE_PHONE_ITEM } from '../storage/actions/phone-list.actions';

class PhoneList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }
  }

  displayPhoneItems(items, onDeletePhoneNumber, searchField = '') {
    if (searchField !== '' && searchField.length > 4) {
      return items
      .filter((item) => {
        const {phoneNumber, name, email, company} = item;
        const searchFieldLowerCase = searchField.toLowerCase();

        return phoneNumber.includes(searchFieldLowerCase) ||
          name.includes(searchFieldLowerCase) ||
          email.includes(searchFieldLowerCase) ||
          company.includes(searchFieldLowerCase);
      })
      .map((item, index) => <PhoneItem key={item.key} onDelete={onDeletePhoneNumber} item={item}/>)
    } else {
      return items.map((item, index) => <PhoneItem key={item.key} onDelete={onDeletePhoneNumber} item={item}/>)
    }
  };

  onSearchString = (event) => {
    this.setState({searchString: event.target.value});
  };

  render() {
    const {items, onAddPhoneNumber, onDeletePhoneNumber} = this.props;

    return (
      <div>
        <PhoneFrom onSubmit={onAddPhoneNumber}/>
        <div className='ui form'>
          <div className='field'>
            <label htmlFor='search'>Поиск</label>
            <input name='search' type='text' onChange={this.onSearchString} disabled={items.length === 0}/>
          </div>
        </div>
        <div className='ui internally celled grid'>
            {
              this.displayPhoneItems(items, onDeletePhoneNumber, this.state.searchString)
            }
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
    dispatch(initialize('phoneForm'));
  },
  onDeletePhoneNumber: (payload) => dispatch({type: DELETE_PHONE_ITEM, payload}),
}))(PhoneList);
