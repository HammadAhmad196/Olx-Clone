import React, { useEffect, useState } from 'react';
import { listAds, listAdsNext } from "../../store/actions/adActions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Pagination() {

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(listAds());
  // }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(listAdsNext())
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5%"
        }}
      >
        <button onClick={() => handleLoadMore()}>Load More</button>
      </div>
    </>
  )
}

export default Pagination;