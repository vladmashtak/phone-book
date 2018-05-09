import React from 'react';
import { Field, reduxForm } from 'redux-form'
import ImageUploader from '../image-uploader/image-uploader.component';

const validate = values => {
  const errors = {};

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Обязательно к заполнению';
  } else if (!/^\+380\d{9}/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Неверный формат номера телефона: +380ХХХХХХХХХ';
  }

  if (!values.email) {
    errors.email = 'Обязательно к заполнению';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный формат электронной почты: test@gmaik.com'
  }

  if (!values.company) {
    errors.photo = 'Обязательно к заполнению';
  }

  if (!values.name) {
    errors.name = 'Обязательно к заполнению';
  }

  if (!values.photo) {
    errors.photo = 'Обязательно к заполнению';
  }

  return errors;
};

const renderField = ({input, type, meta: {touched, error}}) => (
  <div>
    <input {...input} type={type}/>
    {touched && (error && <div className='ui error message'>{error}</div>)}
  </div>
);

const PhoneForm = ({handleSubmit, invalid}) => {
  return (
    <form className='ui form error' onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='phoneNumber'>Телефон</label>
        <Field name='phoneNumber' component={renderField} type='text'/>
      </div>
      <div className='field'>
        <label htmlFor='name'>Имя</label>
        <Field name='name' component={renderField} type='text'/>
      </div>
      <div className='field'>
        <label htmlFor='email'>Электронная почта</label>
        <Field name='email' component={renderField} type='email'/>
      </div>
      <div className='field'>
        <label htmlFor='company'>Компания</label>
        <Field name='company' component={renderField} type='text'/>
      </div>
      <div className='field'>
        <label htmlFor='photo'>Фото</label>
        <Field name='photo' component={renderField} type='text'/>
      </div>
      <ImageUploader/>
      <button className='ui button' disabled={invalid} type='submit'>Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'phoneForm',
  validate
})(PhoneForm)