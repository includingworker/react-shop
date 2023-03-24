import { Link } from "react-router-dom";

import styled from "styled-components";

const NotFoundBlockWrapper = styled.div`
  height: 820px;
  width: 100%;
  background-color: #ececec;
  display: grid;
  grid-row-gap: 50px;
  justify-content: center;
  text-align: center;

  img {
    width: 700px;
    height: 300px;
    margin-top: 200px;
  }

  button {
    width: 168px;
    height: 48px;
    border-radius: 20px;
    background: #ac3634;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
  }
`;

const NotFoundBlock: React.FC = () => {
  return (
    <NotFoundBlockWrapper>
      <img src="img/error3.png" alt="Error" />
      <h1>Извините, но данной страницы не существует</h1>
      <Link to="">
        <button>НА ГЛАВНУЮ</button>
      </Link>
    </NotFoundBlockWrapper>
  );
};

export default NotFoundBlock;
