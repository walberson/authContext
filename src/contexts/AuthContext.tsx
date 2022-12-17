import { createContext, ReactNode, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};
type AuthContextData = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, name, setName }}
    >
      {children}
    </AuthContext.Provider>
  );
}
