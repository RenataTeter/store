import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false)
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      
    };
    getProducts();
  }, [componentMounted]);

  const Loading = () => {
    return <>Loading .....</>;
  };

  const filterProduct = (cat) => {
const updatedList = data.filter((x)=>x.category === cat);
setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className=" buttons d-flex justify-content-center mb-5">
          <button className="bnt bnt-outline me-2" onClick = {() => setFilter(data)}>All</button>
          <button className="bnt bnt-outline-dark me-2" onClick = {() => filterProduct("men's clothing")} >Men's clothig</button>
          <button className="bnt bnt-outline-dark me-2" onClick = {() => filterProduct("women's clothing")}>Women's clothig</button>
          <button className="bnt bnt-outline-dark ms-2" onClick = {() => filterProduct("jewelery")}>Jewelery</button>
          <button className="bnt bnt-outline-dark ms-2" onClick = {() => filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-3">
                <div className="card h-100 p-3 text-center" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top mb-4"
                    alt={product.title}
                    height="280px"
                  />
                  <div className="card-body">
                    <h5 className="card-title tk mb-0" >
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">£{product.price} </p>
                    <NavLink
                      to={`products/${product.id}`}
                      className="btn btn-outline-dark btn-bg "
                    >
                      Add to bag
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container mb-4 py-4">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center display-6">Products</h2>
            <hr className="tk" />
          </div>
        </div>
        <div className="row justify-content-center">  
          {loading ? <Loading /> : <ShowProducts/>}
        </div>
      </div>
    </div>
  );
};
export default Products;
