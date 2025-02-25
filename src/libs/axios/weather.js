import instance from "./instance";

const token = import.meta.env.VITE_API_KEY

 
export async function current(lat=14.9, lon=-92.2667){
    try{
        const {status, data} = await instance.get(`data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}`)
        return {status, data}
    }
    catch(error){
        console.error(error)
        throw error
    }
}

export async function populations (city= "Tapachula", state= "Chiapas", country= "MX"){
    try{
        const {status, data} = await instance.get(`geo/1.0/direct?q=${city},${state},${country}&appid=${token}`)
        return {status, data}
    }
    catch(error){
        console.error(error)
        throw error
    }
}


export async function forecast(lat=14.9, lon=-92.2667){
    try{
        const {status, data} = await instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}`)
        const result = []
        const current = new Date()

        function exist(item) {
            return result.some((element) => {
                const date = new Date(element.dt *1000)
                const current = new Date(item.dt *1000)
                return current.getDate()===date.getDate()
            })
        }
        data.list.forEach(item =>{
            const date = new Date(item.dt * 1000);
            if(
                ((current.getDate() < date.getDate()) ||
                (current.getMonth() <= date.getMonth()) ||
                (current.getFullYear() <= date.getFullYear())
            ) && !exist(item)
            ){
                result.push(item)
            }
        })

        console.log(result)

        return {status, data}
   
    }
    catch(error){
        console.error(error)
        throw error
    }
}


