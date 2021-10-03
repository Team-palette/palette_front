import React from "react";
import { useParams } from "react-router-dom";

type HomeParams = {
  userId?: string;
};

const Home = () => {
  const params: HomeParams = useParams();

  return (
    <>
      {params.userId && <div>{`${params.userId}의 Home`}</div>}
      {!params.userId && <div>MyHome!!</div>}
    </>
  );
};

export default Home;
