import React, { useState as state,useEffect as effect } from "react";
import {Button,FormGroup,Modal, ModalBody, ModalFooter, ModalHeader}from "reactstrap";
import axios from "axios";
import "../css/admin.css"

const admin=()=>{
  const [editar, setEditar] = state(false);
  const [onlyCategory, setOnlyCategory] = state([]);
  const [category, setCategory] = state([]);
  const [product, setProduct] = state([]);
  effect(()=>{
    obtenerCategorias();
    obtenerProductos();
  },[]);
  const handleChange = event => {
    // console.log(event);
    setOnlyCategory({[event.target.name]:event.target.value,id:onlyCategory.id});
  };
  const editarCategoria=async ()=>{
    console.log(onlyCategory)
    await axios.put(`http://${window.location.hostname}:3500/api/category/update/${onlyCategory.id}`,{
        category:onlyCategory.category
    })
    obtenerCategorias(); 
    setEditar(false);
  }
  const cerrarModalEditar=()=>{
    setEditar(false);
  }
  const abrirModalEditar=(data)=>{
    setEditar(true);
    setOnlyCategory({...data})
  }
    const obtenerCategorias=async ()=>{
        const data=await axios.get(`http://${window.location.hostname}:3500/api/category/selectAll`) 
        setCategory(data.data.data)
     }
     const obtenerProductos=async ()=>{
        const data=await axios.get(`http://${window.location.hostname}:3500/api/component/selectAll/data`)
        setProduct(data.data.data)
     }

    return(
        <div className="contaiener ">
            <h1 className="text-center">Bienvenido Admin</h1>
        <div className="container p-5">
            <h2>Lista de categorias</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                {category.map((category, i) => (
                    <tr key={category.id}>
                        <th scope="row">{i+1}</th>
                        <td>{category.category}</td>
                        <td>
                            <Button onClick={()=>{abrirModalEditar(category)}} color="primary">Editar</Button>
                            <Button color="danger">Eliminar</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="container p-5">
        <h2>Lista de productos</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Especificaciones</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {product.map((product, i) => (
                <tr key={product.id}>
                    <th scope="row">{i+1}</th>
                    <td>{product.title}</td>
                    <td>{product.specifications}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>
                        <Button color="primary">Editar</Button>
                        <Button color="danger">Eliminar</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    <Modal isOpen={editar}>
        <ModalHeader>
            <div><h2>Editar categoria</h2></div>
        </ModalHeader>
        <ModalBody>
            <FormGroup>
                <label>Categoria:</label>
                <input type="text" className="form-control"  name="category" value={onlyCategory.category} onChange={handleChange}/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="green" onClick={()=>{editarCategoria()}}>Guardar</Button>
            <Button color="danger" onClick={()=>{cerrarModalEditar()}}>Cancelar</Button>
        </ModalFooter>
    </Modal>
    </div>
    )
}
export default admin;