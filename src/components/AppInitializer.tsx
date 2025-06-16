"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUserFromCookies } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadUserFromCookies());
  }, [dispatch]);

  return <>{children}</>;
}
