import React from "react";
import qs from "qs";
import { Link, useNavigate } from "react-router-dom";

import { Categories, Filters, list, ItemBlock, Skeleton } from "../components";

import { useSelector } from "react-redux";
import { setCategoryId, setFilters } from "../redux/filter/slice";
import { selectFilter } from "../redux/filter/selectors";
import { fetchItems } from "../redux/item/asyncActions";
import { selectItemsData } from "../redux/item/selectors";
import { useAppDispatch } from "../redux/store";
import { SearchItemParams } from "../redux/item/types";

import styled from "styled-components";

const ItemsWrapper = styled.div`
  .main {
    text-align: center;
    position: relative;
    top: -75px;

    .name {
      span {
        font-size: 1.375rem;
        line-height: 1.875rem;
        font-weight: bold;
      }
    }
    .description p {
      font-size: 0.8125rem;
      line-height: 1.3125rem;
      height: 42px;
    }
  }

  .active {
    color: #757575;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    justify-content: center;
    text-align: center;

    a {
      text-decoration: none;
      color: #000000;
    }

    span {
      font-weight: bold;
      justify-content: left;
      text-align: left;
    }

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Items: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectItemsData);

  const { categoryId, sort } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
  }, [categoryId, sort.sortProperty, navigate]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1) as unknown as SearchItemParams
      );
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          categoryId: Number(params.category),
          sort: sort || list[0],
        })
      );

      isMounted.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    const getItems = async () => {
      const sortBy = sort.sortProperty.replace("-", "");
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const category = categoryId;

      dispatch(
        // @ts-ignore
        fetchItems({
          sortBy,
          order,
          category: String(category),
        })
      );
    };
    getItems();
  }, [categoryId, sort.sortProperty, dispatch]);

  const products = items.map((obj: any) => (
    <Link key={obj.id} to={`/product/${obj.id}`}>
      <ItemBlock {...obj} />
    </Link>
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <ItemsWrapper>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Filters value={sort} />
      <div className="main">
        <div className="name">
          <span>MUSE</span>
        </div>
        <div className="description">
          <p>
            Эта одежда Muse, изготовленная исключительно в Италии или Японии,
            меняет представление о одежде, <br /> придавая ей утонченный
            современный вид.
          </p>
        </div>
      </div>
      <div className="content__items">
        {status === "error" ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению, не удалось получить вещи. Попробуйте повторить
              попытку позже.
            </p>
          </div>
        ) : (
          <div className="content">
            {status === "loading" ? skeletons : products}
          </div>
        )}
      </div>
    </ItemsWrapper>
  );
};

export default Items;
