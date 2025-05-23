import AdminLayout from "@/components/AdminDashboard/AdminLayout";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
