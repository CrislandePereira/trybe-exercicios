// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_NAME = 'ADD_NAME';
export const ADD_PASSWORD = 'ADD_PASSWORD';

// ACTIONS CREATORS
export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addName = (name) => ({
  type: ADD_NAME,
  name,
});

export const addPassword = (password) => ({
  type: ADD_PASSWORD,
  password,
});
