import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="/img/logo.svg" alt="Logo" />
          </Link>
        </div>
      </div>
    </>
  );
};
