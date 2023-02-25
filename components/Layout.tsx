import { FC, ReactNode } from "react";
import Header from "./Header";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
