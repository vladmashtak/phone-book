import React from 'react';
import PropTypes from 'prop-types'

import './phone-item.component.css';

const PhoneItem = ({ onDelete, item }) => {
    return (
      <div className='item ui card'>
        <div className='image'>
          <img src='/images/avatar2/large/kristy.png' alt='avatar'/>
        </div>
        <div className='content'>
          <a className='header'>Kristy</a>
          <div className='meta'>
            <span className='date'>Joined in 2013</span>
          </div>
          <div className='description'>
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className='extra content'>
          <button className='ui button' onClick={() => onDelete(item)}>Delete</button>
        </div>
      </div>
    );
};

PhoneItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    phoneNumber: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
};

export default PhoneItem;