import DoctorsLayout from "@/components/client/pages/doctors/layout/DoctorsLayout";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return <DoctorsLayout>{children}</DoctorsLayout>;
};

export default Layout;
