import React from 'react';
import './style.css';
import SocialMedia from '../../social-media';
import Form from '../../form';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contact">
      <SocialMedia />
      <Form />
    </div>
  );
});

export default Contact;
