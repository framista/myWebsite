import React from 'react';
import './style.css';

const Form = () => {
  return (
    <div className="form">
      <form>
        <h3 className="form__title">Let's stay in touch</h3>
        <div className="form__group">
          <label className="form__label">Your name</label>
          <input className="form__input" type="text" name="name" />
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
