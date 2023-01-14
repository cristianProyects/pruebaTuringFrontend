import React from "react";
import "../css/aboutUs.css"
import User from "../img/user.png"
const aboutUs= ()=>{
return(
    <div className="bg-about" id="somos">
        <h1 className="text-center p-5">SOBRE NOSTROS</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5 mx-auto">
            <div className="col">
                <div className="card h-100 text-center bg-transparent w-50 mx-auto">
                <img src={User} className="card-img-top" alt="user"/>
                <div className="card-body">
                    <h5 className="card-title">Ingeniera en Computacion</h5>
                    <p className="card-text">Gabriela Espiridion Martinez</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 text-center bg-transparent w-75 mx-auto">
                <img src={User} className="card-img-top" alt="user" />
                <div className="card-body">
                    <h5 className="card-title">Ingeniera en Sistemas computacionales</h5>
                    <p className="card-text">Cesar Espiridion Martinez</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 text-center bg-transparent w-50 mx-auto">
                <img src={User} className="card-img-top" alt="user" />
                <div className="card-body">
                    <h5 className="card-title">Ingeniera en Sistemas computacionales</h5>
                    <p className="card-text">Cristian Espiridion Martinez</p>
                </div>
             </div>
         </div>
        </div>
    </div>
);
}
export default aboutUs;