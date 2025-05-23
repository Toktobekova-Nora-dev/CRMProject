import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const AdminLayout: FC<ILayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
