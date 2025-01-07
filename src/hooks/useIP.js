import { useContext, useEffect } from "react";
import { getLatLong } from "../services";
import { IPContext } from "../context/IPContext";

export const useIP = () => {
   const {ip, setIP, ll, setLL} = useContext(IPContext);
   const getLL = async (ip) => {
        const {lat, lng} = await getLatLong(ip);
        setLL({lat, lng});
   }
    useEffect(() => {
        if(!ip)
            return;
        getLL(ip);
    }, [ip]);

   return {
         ip,
         setIP,
         ll,
         setLL
   }
}
// const [ip, setIP] = useState('');
// const [ll, setLl] = useState({lat: 0, lng: 0});
// const getLL = async (ip) => {
//     const {lat, lng} = await getLatLong(ip);
//     setLl({lat, lng});
//     console.log('NEW LAT: ', lat, 'NEW LNG: ', lng);
// }
// useEffect(() => {
//    getLL(ip);
// }, [ip]);
// return {
//     ip,
//     setIP
//     ,ll
// }