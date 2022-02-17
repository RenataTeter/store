import React, {useState, useEffect} from 'react'


const Products = () => {

const[data, setData] = useState([]);
const[filter, setFilter] = useState(data);


useEffect(() => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))

}, [])



const ShowProducts = () => {
  return(
  <>
   <div className=" buttons d-flex justify-content-center mb-5">
    <button className="bnt bnt-outline me-2" >All</button>
    <button className="bnt bnt-outline-dark me-2" >Men's clothig</button>
    <button className="bnt bnt-outline-dark me-2">Women's clothig</button>
    <button className="bnt bnt-outline-dark ms-2">Jewelery</button>
    <button className="bnt bnt-outline-dark ms-2">Electronic</button>

  </div>
  {data.map((products)=>{
    return(
      <>
          <div className="mb-5 col-md-3">
          <div class="card h-100 text-center p-2" >
  <img src={products.image} class="card-img-top" alt={products.title} />
  <div class="card-body ">
    <h5 class="card-title mb-0 tk" height="250px">{products.title.substring(0,12)} </h5>
    <p class="card-text">£{products.price} </p>
    <a href="#" class="btn btn-outline-dark btn-bg ">Add to bag</a>
  </div>
</div>
          </div>
      </>
    )
  }
  )}
  </>
 )
}


  return (
    <div>
      <div className="container mb-4 py-4">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className='text-center display-6'>Products
            </h2>
            <hr className="tk" />
          </div>
        </div>
        <div className="row justify-content-center"><ShowProducts/></div>
      </div>

    </div>
  )
}
export default Products