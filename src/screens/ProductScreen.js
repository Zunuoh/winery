import React, { useEffect, useState } from "react";
import Header from "./Header";
import { ApiModule } from "../api/apiModule";

const ProductScreen = () => {
  const [wines, setWines] = useState("");

  const showWine = () => {
    ApiModule.getWine().then((data) => {
      setWines(data.recommendedWines);
    });
  };

  useEffect(() => {
    showWine();
    ApiModule.getWine();
  }, []);

  return (
    <div>
      <Header />
      <div>
        ddd
        {wines &&
          wines.map((wine) => {
            return (
              <div>
                <div>
                  {wine.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductScreen;
