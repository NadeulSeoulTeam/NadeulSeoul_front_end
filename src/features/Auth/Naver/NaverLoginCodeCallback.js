import React from 'react';
import { Link } from 'react-router-dom';

function NaverLoginCodeCallback() {
  const getAccessCode = () => {
    try {
      const code = new URL(window.location.href).searchParams.get('code');
      return code;
    } catch (e) {
      return <Link to="/error" />;
    }
  };
  return <>{getAccessCode()}</>;
}

export default NaverLoginCodeCallback;
