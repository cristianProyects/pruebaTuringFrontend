import React from "react";
import "../css/evolution.css"
import evo1 from "../img/evo1.png"
import evo2 from "../img/evo2.png"
import evo3 from "../img/evo3.png"
import evo4 from "../img/evo4.png"
const evolution=()=>{
    return (
        <div className="bg-evolution">
            <div className="flex">
                <h2 className="center">EVOLUCIONA TU PC</h2>
            </div>
            <div className="flex ">
                <div class="text-center bg-green flex">
                    <img src={evo1} class="rounded" alt="..." />
                </div>
                <div class="text-center bg-green">
                    <img src={evo2} class="rounded" alt="..." />
                </div>
                <div class="text-center bg-green flex">
                    <img src={evo3} class="rounded" alt="..." />
                </div>
                <div class="text-center bg-green">
                    <img src={evo4} class="rounded" alt="..." />
                </div>
            
            </div>
        </div>
    )

}
export default evolution;