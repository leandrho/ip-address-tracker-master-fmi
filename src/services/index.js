import axios from "axios";

export const getIPInfo = async (ip) => {
    const url =`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_IPKEY}&ipAddress=${ip}`
    try{
        const {data: {isp, location}} = await axios.get(url);
        const {lat, lng, city, timezone, country, region} = location;
        const ret = {
            isp,
            city,
            country,
            timezone,
            region,
            lat, lng,
            curIP: ip
        }
        return ret;
    }
    catch(err){
        throw new Error("Error getting data: ", err);
    }
}
