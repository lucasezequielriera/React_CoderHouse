import { useState, createContext } from "react";

const Context = createContext({})

export function ContextProvider ({children}) {
    const [info, setInfo] = useState([{id: 1, nombre: 'Lucas'}])

    return <Context.Provider value={{info, setInfo}}>
        {children}
    </Context.Provider>
}

export default Context