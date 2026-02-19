import { useState } from "react";
import {
  useGetAllProductQuery,
  useGetSpecificProductQuery,
} from "./store/slice";

const App = () => {
  let [selectedProduct, setSelectedProduct] = useState(null);
  let { isLoading, isError, data, error } = useGetAllProductQuery();

  let {
    isLoading: isLoadingSpecific,
    isError: isErrorSpecific,
    error: errorSpecific,
    data: dataSpecific,
  } = useGetSpecificProductQuery(selectedProduct, { skip: !selectedProduct });
  if (isLoading || isLoadingSpecific) return <h1>Loading..</h1>;
  if (isError || isErrorSpecific) return <h1>{error || errorSpecific}</h1>;
  return (
    <div>
      {selectedProduct && (
        <div>
          <h1 style={{ color: "cyan" }}>{dataSpecific.title}</h1>
          <p style={{ color: "yellow" }}>{dataSpecific.description}</p>
        </div>
      )}
      {data?.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <button>Delete</button>
          <button onClick={() => setSelectedProduct(item.id)}>Status</button>
        </div>
      ))}
    </div>
  );
};

export default App;
