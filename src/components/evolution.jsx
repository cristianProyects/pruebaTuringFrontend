import React from "react";
import "../css/evolution.css"
import evo1 from "../img/evo1.png"
import evo2 from "../img/evo2.png"
import evo3 from "../img/evo3.png"
import evo4 from "../img/evo4.png"
const evolution=()=>{
    return (
        <div className="bg-evolution" id="evolucion">
            <div className="flex">
                <h2 className="center p-5">EVOLUCIONA TU PC</h2>
            </div>
            <div className="flex ">
                <div className="text-center bg-green flex">
                    <img src={evo1} className="rounded" alt="..." />
                </div>
                <div className="text-center bg-green">
                    <img src={evo2} className="rounded" alt="..." />
                </div>
                <div className="text-center bg-green flex">
                    <img src={evo3} className="rounded" alt="..." />
                </div>
                <div className="text-center bg-green">
                    <img src={evo4} className="rounded" alt="..." />
                </div>
            
            </div>
        </div>
    )

}
export default evolution;