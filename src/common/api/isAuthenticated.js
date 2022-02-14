import { getToken } from './JWT-Token';
// JWT- Token에서 보내주는 getToken 메서드 활용
// => isAuthenticated을 활용해서 토큰의 유무 확인 => 즉 로그인 여부 확인

const isAuthenticated = () => !!getToken();

export default isAuthenticated;
