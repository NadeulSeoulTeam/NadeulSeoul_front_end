import Cookies from 'universal-cookie';

const cookies = new Cookies();

// save, get, delete token method with universal-cookie

// save
export const saveToken = (token) => {
  cookies.set('token', token, {
    path: '/',
    // expires: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};

// get
export const getToken = () => {
  cookies.get('token');
};

// delete
export const deleteToken = () => {
  cookies.remove('token');
};
