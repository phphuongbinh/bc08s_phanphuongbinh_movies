import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="space-y-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
