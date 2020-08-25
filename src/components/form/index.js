import React, { useState } from 'react';
import './style.css';
import { validateName } from '../../utils/validate';

const Form = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const changeName = (e) => {
    const name = e.target.value;
    console.log(validateName(name));
    setErrorName(validateName(name));
    setName(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorName) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify({ 'form-name': 'contact' }),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3 className="form__title">Let's stay in touch</h3>
        <div className="form__group">
          <label className="form__label">Your name</label>
          <input
            className="form__input"
            type="text"
            name="name"
            value={name}
            onChange={changeName}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Your email</label>
          <input className="form__input" type="email" name="email" />
        </div>
        <div className="form__group">
          <label className="form__label">Subject</label>
          <input className="form__input" type="text" name="subject" />
        </div>
        <div className="form__group">
          <label className="form__label">Message</label>
          <textarea
            className="form__textarea"
            rows="3"
            name="message"
          ></textarea>
        </div>
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
