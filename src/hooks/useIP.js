import { useContext, useEffect } from "react";
import { getIPInfo } from "../services";
import { IPContext } from "../context/IPContext";

export const useIP = () => {
   const {ip, setIP, ipInfo, setIpInfo} = useContext(IPContext);
   const getInfo = async (ip) => {
        const ipInfo = await getIPInfo(ip);
        setIpInfo(ipInfo);
   }
    useEffect(() => {
        console.log('cambio a: ', ip)
        console.log('curIP: ', ipInfo.curIP)
        if(ip === '' && ipInfo.curIP == ip)
            return;
        console.log('se optiene...')
        getInfo(ip);
    }, [ip]);

   return {
         ip,
         setIP,
         ipInfo,
         setIpInfo
   }
}