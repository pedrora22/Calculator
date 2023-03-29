import { useContext } from "react"
import { ContextC } from "../context/Context"

const Button = ({ value }) => {
    const {calc, setCalc} = useContext(ContextC);

    const handleClickBtn = () => {
        const stg = value.toString();

        let numV;
        if(stg === '0' && calc.num === 0) {
            numV = "0"
        }else{
            numV = Number(calc.num + stg);
        }

        setCalc({
            ...calc,
            num: numV
        })
    }

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    const resetClick = () => {
        setCalc({
            num: '0', value: '0'
        })
    }

    const delClick = () => {
        setCalc({
            res: calc.num === 0 ? calc.num : calc.num.toString().slice(0, -1),
            num: 0
        })
    }

    const divideClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }


    const equalsClick = () => {
        if(calc.res && calc.num) {
            const Math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                    '%': (a, b) => (a/100) * b
                }
                return result[sign](a, b);
            }

            setCalc({
                res: Math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
        


    }

    const handleClick = () => {
        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': divideClick,
            'x': divideClick,
            '-': divideClick,
            '+': divideClick,
            '=': equalsClick,
            'D': delClick,
            '%': divideClick
        }
        if(results[value]) {
            return results[value]()
        }else{
            return handleClickBtn();
        }
    }

    return (
        <button onClick={handleClick} className="btn">{value}</button>
    )
}

export default Button