import React from "react";
import { useDispatch } from "react-redux";
import { SortPropertyEnum, Filter } from "../redux/filter/type";
import { setSort } from "../redux/filter/slice";

import styled from "styled-components";

const FiltersWrapper = styled.div`
  height: 127px;
  position: relative;
  top: 120px;

  .content__slider {
    height: 80px;
    display: flex;
    border-bottom: 0.0625rem solid #e5e5e5;
  }

  .filters__content__right {
    display: flex;
    margin: auto;
    margin-right: 45px;
    margin-top: 42px;

    p {
      color: #757575;
      font-size: 1rem;
      line-height: 1.3125rem;
    }

    .strip {
      height: 0.75rem;
      border-right: 0.0625rem solid #757575;
      margin-left: 15px;
      margin-right: 15px;
      margin-top: 5px;
    }

    .span {
      font-size: 1rem;
      line-height: 1.3125rem;
    }
    .sorting {
      cursor: pointer;
      margin-top: -2px;

      span {
        position: relative;
      }
    }
  }
  .sorting_down {
    height: 200px;
    width: 1440px;
    background-color: #fff;
    position: absolute;

    ul {
      text-align: left;
      font-size: 1rem;
      line-height: 2rem;
      padding: 20px;
      margin-left: 30px;
      position: absolute;
    }

    .selected {
      font-weight: 700;
      font-size: 1.1rem;
    }

    li:hover {
      color: #757575;
      cursor: pointer;
    }
  }
`;

type FilterItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type FilterProps = { value: Filter };

export const list: FilterItem[] = [
  { name: "Начать с новинок", sortProperty: SortPropertyEnum.DATE },
  { name: "По рейтингу", sortProperty: SortPropertyEnum.RATING },
  { name: "От дешёвых к дорогим", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "От дорогих к дешёвым", sortProperty: SortPropertyEnum.PRICE_DESC },
];

export const Filters: React.FC<FilterProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: FilterItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _event = e as PopupClick;
      if (sortRef.current && !_event.composedPath().includes(sortRef.current))
        setOpen(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <FiltersWrapper ref={sortRef}>
      <div className="content__slider">
        <div className="filters__content__right">
          <div className="strip"></div>
          <div className="sorting">
            <span onClick={() => setOpen(!open)}>{value.name}</span>
          </div>
        </div>
      </div>
      {open && (
        <div className="sorting_down">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "selected" : ""
                }>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </FiltersWrapper>
  );
});
