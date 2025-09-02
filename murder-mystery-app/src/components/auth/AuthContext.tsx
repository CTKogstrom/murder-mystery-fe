import { createContext, useReducer, useContext, type ReactNode } from 'react';



const initialState = { user: null, isAuthenticated: false };

const AuthContext = createContext(initialState);

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user: string) => dispatch({ type: 'LOGIN', payload: user });
  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);