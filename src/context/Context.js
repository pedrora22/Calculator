import { createContext, useState } from "react";

export const ContextC = createContext();

const ContextPro = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const proValue = {
        calc, setCalc
    }

    return(
        <ContextC.Provider value={proValue}>
            {children}
        </ContextC.Provider>
    )
}

export default ContextPro