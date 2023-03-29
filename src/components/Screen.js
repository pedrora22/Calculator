import { useContext } from "react";
import { ContextC } from "../context/Context";
import { Textfit } from "react-textfit";


const Screen = () => {
    const { calc } = useContext(ContextC);


    return (
        <Textfit className="screen" max={100} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
    )
}

export default Screen