import { getToken, getLoginSuccess } from './JWT-Token';

const isAuthenticated = () => !!getToken();

export default isAuthenticated;

export const isLoggedIn = () => getLoginSuccess();
