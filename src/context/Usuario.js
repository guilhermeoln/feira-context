import { createContext, useState } from "react";



export const UsuarioContext = createContext();



export const UsuarioProvider = ({ children }) => {

    const [nomeUsuario, setNomeUsuario] = useState('');

    return (
        <UsuarioContext.Provider value={{nomeUsuario, setNomeUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );
}