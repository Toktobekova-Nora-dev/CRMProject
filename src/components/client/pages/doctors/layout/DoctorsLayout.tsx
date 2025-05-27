import React, { FC, ReactNode } from "react";

interface DoctorLayout {
  children: ReactNode;
}
const DoctorsLayout: FC<DoctorLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default DoctorsLayout;
