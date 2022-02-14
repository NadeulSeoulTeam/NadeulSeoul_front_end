import Cookies from 'universal-cookie';

const cookies = new Cookies();

// save
export const saveToken = (token) => {
  return cookies.set('token', token, {
    path: '/',
    // expires: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};

// get
export const getToken = () => {
  return cookies.get('token');
};

// delete
export const deleteToken = () => {
  return cookies.remove('token');
};

// save login success
export const saveLoginSuccess = (LoggedIn) => {
  return cookies.set('LoggedIn', LoggedIn, {
    path: '/',
    // expires: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};

// get login success
export const getLoginSuccess = () => {
  return cookies.get('LoggedIn');
};

// delete
export const deleteLoginSuccess = () => {
  return cookies.remove('LoggedIn');
};
