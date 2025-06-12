import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "@/utils/cookies";

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  specialty?: string;
  license?: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;

      setCookie("authToken", action.payload.token, 7);
      setCookie("userData", JSON.stringify(action.payload.user), 30);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;

      deleteCookie("authToken");
      deleteCookie("userData");
    },

    loadUserFromCookies: (state) => {
      const token = getCookie("authToken");
      const userString = getCookie("userData");

      if (token && userString) {
        try {
          const user = JSON.parse(userString);
          state.user = user;
          state.token = token;
          state.isAuthenticated = true;
        } catch (error) {
          console.error("Error parsing user data from cookies:", error);
          deleteCookie("authToken");
          deleteCookie("userData");
        }
      }
    },

    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        setCookie("userData", JSON.stringify(state.user), 30);
      }
    },

    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setCookie("authToken", action.payload, 7);
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  loadUserFromCookies,
  updateUser,
  updateToken,
  setLoading,
} = authSlice.actions;

export default authSlice.reducer;
