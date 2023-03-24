import React from "react";

import styled from "styled-components";

const NavigationTabsWrapper = styled.div`
  width: 100%;
  height: 62px;
  background-color: #fff;
  font-size: 15px;
  border-bottom: 0.0625rem solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 1;
  white-space: nowrap;

  ul {
    display: flex;
    position: relative;
    top: 35%;
    left: 40px;
  }

  li {
    cursor: pointer;
    margin-right: 20px;
    transition: 0.5s ease-in-out;

    &:hover {
      color: #757575;
    }
  }

  @media (max-width: 890px) {
    overflow: scroll;
    width: 100%;
  }
`;

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = [
  "ДЖИНСЫ",
  "РУБАШКИ",
  "ФУТБОЛКИ",
  "ХУДИ & СВИТШОТЫ",
  "ШТАНЫ & БРЮКИ",
  "ШАПКИ & ШАРФЫ",
  "СУМКИ",
  "ЦЕПИ",
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <NavigationTabsWrapper>
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active" : ""}>
              {categoryName}
            </li>
          ))}
        </ul>
      </NavigationTabsWrapper>
    );
  }
);
