import React from "react";
import { useGetAllProductQuery } from "./store/slice";

const App = () => {
  let { isLoading, isError, data } = useGetAllProductQuery();
  if (isLoading) return <h1>Loading..</h1>;
  if (isError) return <h1>{isError}</h1>;
  return (
    <div>
      {data.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
};

export default App;
