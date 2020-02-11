import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { abn } = useParams();
  return <h1>Detail for {abn}</h1>;
};
