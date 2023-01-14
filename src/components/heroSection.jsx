import React from "react";
import "../css/heroSection.css";
const herosection = () => {
  return (
    <div className="bg-heroSection text-white" id="inicio">
      <div className="px-4 py-5  text-center bg-heroSection">
        <h1 className="display-5 fw-bold">TecnoCompras</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Somos una de las mayores distribuidoras de componentes para
            computadoras y laptops a nivel mundial.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn bg-btn btn-lg px-4 gap-3 text-white">
              Conocenos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default herosection;
