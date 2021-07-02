import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";

function ProductItem() {
  const { id } = useParams();
  let shoe = Shoes[id];

  if (!shoe) {
    return <h3>No Product Found</h3>;
  }

  return (
    <div className="row margin-top-style">
        <div className="col m4"></div>
      <div className="col m4">
        <div className="card">
          <div className="card">
            <div className="card-image">
              <img src={shoe.img} />
              <span className="card-title color-black">{shoe.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
