import { Api} from "./api";
import {RoutinesApi} from "./routines";
export {CyclesApi,Cycle}
class CyclesApi{
    static get url() {
        return `${RoutinesApi.url}/`;
    }

    static async createCycle(routineID,cycleData,controller){
        return await Api.post(`${CyclesApi.url}${routineID}/`+'cycles',true,cycleData,controller)
            .catch(err =>{
                throw err
            })
    }

    static async getRoutineCycleById(routineID,cycleId,controller){
        return await Api.get(`${CyclesApi.url}`+routineID+'/cycles/'+cycleId,true,controller).catch(err => {
            throw err;
        })
    }

    static async getRoutineCycles(routineID,controller){
        return await Api.get(`${CyclesApi.url}`+routineID+'/cycles',true,controller).catch(err =>{
            throw err
        })
    }

    static async deleteCycle(routineID,cycleID,controller){
        return await Api.delete(`${CyclesApi.url}${routineID}/cycles/${cycleID}`,true,controller)
            .catch(err =>{
                throw err;
            })
    }

}

class Cycle{
    constructor(name,detail,type,order,repetitions) {
        this.name=name;
        this.detail=detail;
        this.type=type;
        this.order=order;
        this.repetitions=repetitions
    }
}