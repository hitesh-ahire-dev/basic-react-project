import { useState } from "react";
import Child from "./Child";

export default function Parent() {

    const [data, setData] = useState("Some data from Parent");

    const handleClick = (newData) => {
        console.log("Button clicked in Child, data received:", newData);
        setData(newData);
    }

    return (
        <div>
            <h2>Parent Component</h2>
            <Child dataFromParent={data} onButtonClick={handleClick} />
        </div>
    )
}   