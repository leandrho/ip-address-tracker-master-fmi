import { createContext, useState } from "react";

export const IPContext = createContext({
    ip: '',
    setIP: () => {},
    ll: { lat: 0, lng: 0 },
    setLL: () => {},
  });

export const IPProvider = ({children}) => {
    const [ip, setIP] = useState('');
    const [ll, setLL] = useState({lat: 0, lng: 0});

    return (
        <IPContext.Provider value={{ip, setIP, ll, setLL}}> 
            {children}
        </IPContext.Provider>
    )
}