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
        if(ip === '' && ipInfo.curIP == ip)
            return;
        getInfo(ip);
    }, [ip]);

   return {
         ip,
         setIP,
         ipInfo,
         setIpInfo
   }
}