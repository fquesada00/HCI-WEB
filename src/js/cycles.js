import { Api} from "./api";
import {RoutinesApi} from "./routines";
export {CyclesApi}
class CyclesApi{
    static get url() {
        return `${RoutinesApi.url}/`;
    }

    static async createCycle(routineID,cycleData,controller){
        return await Api.post(`${CyclesApi.url}`+'cycles',true,cycleData,controller)
            .catch(err =>{
                throw err
            })
    }

    static async getRoutineCycleById(routineID,cycleId,controller){
        return await Api.get(`${CyclesApi.url}`+routineID+'cycles/'+cycleId,true,controller).catch(err => {
            throw err;
        })
    }

    static async getRoutineCycles(routineID,controller){
        return await Api.get(`${CyclesApi.url}`+routineID+'cycles',true,controller).catch(err =>{
            throw err
        })
    }

}