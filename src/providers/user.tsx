import React, { createContext, useState } from 'react';
import { element } from 'prop-types';

interface UserContextData {
  login: string | null;
  setLogin(login: string): void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [login, setLogin] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: element.isRequired,
};

export default UserContext;
