import { getToken } from './JWT-Token';

const isAuthenticated = () => !!getToken();

export default isAuthenticated;

export const isAuthenticatedforsignin = () => !!getToken();
