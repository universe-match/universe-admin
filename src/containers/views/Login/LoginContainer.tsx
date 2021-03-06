import React from 'react';

import { postLogin } from '@services/api';
import { saveItem } from '@services/storage';
import { AuthenticationKey } from '@services/serviceKey';

import Login from './Login';

type AdminUser = {
  userId: string;
  password: string;
};

function LoginContainer({ onLogin }: any) {
  const login = async (adminUser: AdminUser) => {
    const authentication = await postLogin(adminUser);
    if (authentication) {
      saveItem(AuthenticationKey, JSON.stringify(authentication));
      onLogin(authentication);
    }
  };

  return <Login onClick={login} />;
}

export default LoginContainer;
