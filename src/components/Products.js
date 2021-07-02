import React from "react";
import {Link} from 'react-router-dom';
import Shoes from "../shoes.json";

function Products() {
  return (
    <div>
      <div className="row">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <div key={keyName} className="col s12 m4">
              <Link to={`/products/${keyName}`}>
                <div className="card">
                  <div className="card-image">
                    <img src={shoe.img} alt={keyName} />
                  </div>
                  <div className="card-content">
                    <p className="card-title-style">{shoe.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
