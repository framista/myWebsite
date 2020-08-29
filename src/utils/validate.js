export const validateName = (name) => {
  name = name.trim();
  if (name.length < 3) {
    return 'Too short name';
  } else if (name.length > 40) {
    return 'Too long name';
  }
  return '';
};

export const validateEmail = (email) => {
  //eslint-disable-next-line
  const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(mailformat)) {
    return '';
  }
  return 'If you pass correct email, I will be able to answer you.';
};

export const validateSubject = (subject) => {
  subject = subject.trim();
  if (subject.length < 5) {
    return 'Enter longer subject';
  } else if (subject.length > 80) {
    return 'Too long subject';
  }
  return '';
};

export const validateMessage = (message) => {
  message = message.trim();
  if (message.length < 10) {
    return 'Please write more in your message';
  } else if (message.length > 1000) {
    return 'Too long message';
  }
};

export const isError = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      return true;
    }
  }
  return false;
};
