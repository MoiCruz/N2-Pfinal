import instance from "./instance";

const token = import.meta.env.VITE_API_KEY
console.log(token);

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

export async function forecast(lat=14.9, lon=-92.2667){
    try{
        const {status, data} = await instance.get(`forecast?lat=${lat}&lon=${lon}&appid=${token}`)
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
        throw error
    }
}


