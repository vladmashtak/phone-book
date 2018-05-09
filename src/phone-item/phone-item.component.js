import React from 'react';
import PropTypes from 'prop-types'

import './phone-item.component.css';

const PhoneItem = ({ onDelete, item }) => {
    return (
      <div className='item ui card'>
        <div className='image'>
          <img src={item.photo} alt='avatar'/>
        </div>
        <div className='content'>
          <a className='header'>{item.name}</a>
          <div className='meta'>
            <span className='date'>{item.phoneNumber}</span>
          </div>
          <div className='description'>
            <p>Email: {item.email}</p>
            <p>Company: {item.company}</p>
          </div>
        </div>
        <div className='extra content'>
          <button className='ui button' onClick={() => onDelete({key: item.key})}>Delete</button>
        </div>
      </div>
    );
};

PhoneItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    key: PropTypes.number,
    phoneNumber: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
};

export default PhoneItem;