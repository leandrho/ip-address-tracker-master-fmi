import { useEffect, useState } from "react";


// Desc: Custom hook to get the user's IP address
export const useIP = () => {
    const [ip, setIP] = useState('');
    useEffect(() => {
        const url =`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_IPKEY}&ipAddress=${ip}`
        fetch(url).then(res => res.json()).then(data => {
            const {lat, lng} = data.location;
            console.log(lat, lng);
        })
    }, 
    [ip]);
    return {
        ip,
        setIP
    }
}
