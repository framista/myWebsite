import React, { useState } from 'react';
import './style.css';
import {
  validateName,
  validateEmail,
  validateSubject,
  validateMessage,
  isError,
} from '../../utils/validate';
import Modal from '../modal';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorData, setErrorData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [modalContent, setModalContent] = useState({
    title: 'The message was sent successfully',
    body:
      'Thanks for your message! I promise to answer you as soon as possible 😀',
    isSucceeded: true,
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const successfullySend = {
    title: 'The message has been sent successfully',
    body: `Hi ${data.name}! Thanks for your message! I promise to answer you as soon as possible 😀`,
    isSucceeded: true,
  };

  const unsuccessfullySend = {
    title: 'Failed to send message',
    body: `Hi ${data.name}! There is problem with sending the message. You can try again later or contact me by email - jablonska.adrianna@wp.pl`,
    isSucceeded: false,
  };

  const changeField = (e, validate) => {
    const value = e.target.value;
    const name = e.target.name;
    setErrorData({ ...errorData, [name]: validate(value) });
    setData({ ...data, [name]: value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const validateAll = () => {
    const nameError = validateName(data.name);
    const emailError = validateEmail(data.email);
    const subjectError = validateSubject(data.subject);
    const messageError = validateMessage(data.message);
    return {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateAll();
    setErrorData(errors);
    if (!isError(errors)) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
        .then((response) => {
          if (response.status === 200) {
            setData({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
            setModalContent({ ...successfullySend });
            setModalOpen(true);
          } else {
            setModalContent({ ...unsuccessfullySend });
          }
        })
        .catch((error) => {
          setModalContent({ ...unsuccessfullySend });
        })
        .finally(() => setModalOpen(true));
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} method="post" noValidate>
        <h3 className="form__title">Let's stay in touch</h3>
        <div className="form__group">
          <label className="form__label">Your name</label>
          <input
            className="form__input"
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => changeField(e, validateName)}
          />
          {errorData.name && <p className="form__error">{errorData.name}</p>}
        </div>
        <div className="form__group">
          <label className="form__label">Your email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => changeField(e, validateEmail)}
          />
          {errorData.email && <p className="form__error">{errorData.email}</p>}
        </div>
        <div className="form__group">
          <label className="form__label">Subject</label>
          <input
            className="form__input"
            type="text"
            name="subject"
            value={data.subject}
            onChange={(e) => changeField(e, validateSubject)}
          />
          {errorData.subject && (
            <p className="form__error">{errorData.subject}</p>
          )}
        </div>
        <div className="form__group">
          <label className="form__label">Message</label>
          <textarea
            className="form__textarea"
            rows="3"
            name="message"
            value={data.message}
            onChange={(e) => changeField(e, validateMessage)}
          />
          {errorData.message && (
            <p className="form__error">{errorData.message}</p>
          )}
        </div>
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        modalContent={modalContent}
      />
    </div>
  );
};

export default Form;
