import { getToken } from './JWT-Token';

const isAuthenticated = () => !!getToken();

export default isAuthenticated;
