import * as React from "react";
import { AuthUser, LoginCredentials } from "@/types/auth.types";
import { loginApi, logoutApi, getMeApi } from "@/services/auth.service";
import { getAccessToken, setAccessToken, refreshAccessToken } from "@/services/api-client";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthUser>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [token, setToken] = React.useState<string | null>(getAccessToken());
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const initAuth = React.useCallback(async () => {
    try {
      let currentToken = getAccessToken();
      
      // If no memory token, attempt session restoration via HttpOnly refresh cookie
      if (!currentToken) {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          currentToken = getAccessToken();
        }
      }

      if (currentToken) {
        const profile = await getMeApi();
        setUser(profile);
        setToken(currentToken);
      } else {
        setUser(null);
        setToken(null);
        setAccessToken(null);
      }
    } catch (err) {
      console.warn("[AuthProvider] Session restoration failed or expired:", err);
      setUser(null);
      setToken(null);
      setAccessToken(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    initAuth();
  }, [initAuth]);

  const login = async (credentials: LoginCredentials): Promise<AuthUser> => {
    setIsLoading(true);
    try {
      const data = await loginApi(credentials);
      setUser(data.user);
      setToken(data.accessToken);
      return data.user;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await logoutApi();
    } catch (err) {
      console.warn("[AuthProvider] Logout API call error:", err);
    } finally {
      setUser(null);
      setToken(null);
      setAccessToken(null);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
