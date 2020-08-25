export const validateName = (name) => {
  if (name.length < 3) {
    return 'Too short name';
  } else if (name.length > 40) {
    return 'Too long name';
  }
  return '';
};

export const validateEmail = (email) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return '';
  }
  return 'If you pass correct email, I will be able to answer you.';
};

export const validateSubject = (subject) => {
  if (subject.length < 5) {
    return 'Enter longer subject';
  } else if (subject.length > 80) {
    return 'Too long subject';
  }
  return '';
};

export const validateMessage = (message) => {
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
