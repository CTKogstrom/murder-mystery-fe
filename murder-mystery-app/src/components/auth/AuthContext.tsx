import { createContext, useReducer, useContext, type ReactNode } from 'react';

type AuthState = {
  user: string | null;
  isAuthenticated: boolean;
};

type AuthAction =
  | { type: 'LOGIN'; payload: string }
  | { type: 'LOGOUT' };

type AuthContextType = AuthState & {
  login: (user: string) => void;
  logout: () => void;
};

const initialState: AuthState = { user: null, isAuthenticated: false };

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: () => {},
  logout: () => {},
});

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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