import axios from "axios";

export const getLatLong = async (ip) => {
    const url =`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_IPKEY}&ipAddress=${ip}`
    try{
        const {data: {location: {lat, lng}}} = await axios.get(url);
        return {lat, lng};
    }
    catch(err){
        throw new Error("Error getting data: ", err);
    }
}
