import { useState } from "react";
import Actions from "./actions";
function Counter() {
    let [counter,setCounter]=useState(0);
    const plus=()=>
    {
        setCounter(counter+=1);
    };
    const min=()=>
    {
        setCounter(counter-=1);
    };
    return (
        <div className="container">
            <p className="number">{counter}</p>
            <Actions plus={plus} min={min}></Actions>
        </div>
    );
}
export default Counter;