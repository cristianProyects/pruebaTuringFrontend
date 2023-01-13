import React , { useState as state,useEffect as effect } from "react";
import "../css/productos.css";
import laptop from "../img/laptop.png"
import computadora from "../img/computadora.png"

const products = () => {
  const [category, setCategory] = state([]);
  const [product, setProduct] = state([]);
  effect(()=>{
    obtenerCategorias();
    obtenerProductos(1);
  },[]);
     const obtenerCategorias=async ()=>{
        const data=await fetch(`http://${window.location.hostname}:3500/api/category/selectAll`)
        const p=await data.json()        
        setCategory(p.data)
     }
     const [selected, setSelected] = state([]);

  const handleChange = event => {
    setSelected(event.target.value);
    obtenerProductos(event.target.value)
  };
     const obtenerProductos=async (id)=>{
        const data=await fetch(`http://${window.location.hostname}:3500/api/component/select/${id}`)
        const p=await data.json()
        setProduct(p.data)
     }
  return (
    <div className="bg-products p-5">
<select className="form-select form-select-sm mx-auto select"    onChange={handleChange}>  
  {
    category.map((categoryOne)=>(
      <option key={categoryOne.id} value={categoryOne.id}>{categoryOne.category}</option>
    ))    
  }
</select>
    
      <div className="card-group">
        {product.map((product, i) => (
          <div className="card-deck mx-auto" key={product.id}>
            <div className="card mt-2 bg-transparent card-18">
              <div className="text-center bg-image">
              <img
                className="card-img-top img-responsive img"
                src={product.category_id===3?laptop:computadora}
                alt="Card image cap"             
              />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">{product.title}</h4>
                <p className="card-text">{product.specifications}</p>
                
              </div>
              <div className="card-body bg-other">
              <button type="button" class="btn btn-green">Precio : $ {product.price} MXN</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default products;
