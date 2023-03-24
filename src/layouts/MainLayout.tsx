import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

import styled from "styled-components";

const Wrapper = styled.div`
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 0.0625rem solid #e5e5e5;

    .header__logo {
      text-align: center;

      img {
        height: 2.5rem;
        margin: 7px;
      }
    }
  }
`;

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MainLayout;
