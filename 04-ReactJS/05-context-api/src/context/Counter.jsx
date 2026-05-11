import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CoutnerProvider = (props) => {
 
    const [count, setCount] = useState(0);

    return (
        <CounterContext value={{count, setCount}}>
            {props.children}
        </CounterContext>
    );
}