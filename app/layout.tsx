import { FC, PropsWithChildren } from "react";
import "../styles/global.scss";

type RootLayoutFC = FC<PropsWithChildren>;

const RootLayout: RootLayoutFC = ({ children }) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
