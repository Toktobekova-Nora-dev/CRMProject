"use client";

import { Provider } from "react-redux";
import type { ReactNode, FC } from "react";
import { store } from "@/store/store";
import AppInitializer from "@/components/AppInitializer";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <AppInitializer>{children}</AppInitializer>
    </Provider>
  );
};

export default ReduxProvider;
