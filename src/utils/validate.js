export const validateName = (name) => {
  if (name.length < 3) {
    return 'Too short name';
  } else if (name.length > 40) {
    return 'Too long name';
  }
  return '';
};
