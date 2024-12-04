import { useDispatch, useSelector } from "react-redux";
import styles from "./Cards.module.scss";
import { RootState } from "@reduxjs/toolkit/query";
import { Card } from "../../components/Card/Card";
import { useEffect } from "react";
import { getProductList } from "../../Redux/slice/productSlice";
import { AppDispatch } from "../../Redux/store";

export const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const products = useSelector((state: RootState) => state.products.products);

  return (
    <>
      <div className={styles.cards__wrapper}>
        {products.map((product: any) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
