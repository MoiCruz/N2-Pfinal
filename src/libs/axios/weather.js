import instance from "./instance";

const token = import.meta.env.VITE_API_KEY

export async function current(lat=14.9, lon=-92.2667){
    try{
        const {status, data} = await instance.get(`weather?lat=${lat}&lon=${lon}&appid=${token}`)
        return {status, data}
    }
    catch(error){
        throw error
    }
}
console.log(token);