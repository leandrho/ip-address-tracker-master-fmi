import { createContext, useState } from "react";

export const IPContext = createContext({
    ip: '',
    setIP: () => {},
    ipInfo: {
        isp: '',
        city: '',
        country: '',
        timezone: '',
        region: '',
        lat: 0, lng: 0,
        curIP: ''
    },
    setIpInfo: () => {},
  });

export const IPProvider = ({children}) => {
    const [ip, setIP] = useState('192.212.174.101');
    const [ipInfo, setIpInfo] = useState({
        isp: '',
        city: '',
        country: '',
        timezone: '',
        region: '',
        lat: 0, lng: 0,
        curIP: ''
    });
    return (
        <IPContext.Provider value={{ip, setIP, ipInfo, setIpInfo}}> 
            {children}
        </IPContext.Provider>
    )
}