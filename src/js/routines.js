import { Api} from "./api";
export {RoutinesApi,Routine}
class RoutinesApi{
    static get url() {
        return `${Api.baseUrl}/routines`;
    }


    static async createRoutine(routine,controller){
        return await Api.post(`${RoutinesApi.url}`,true,routine,controller).catch(err => {
            throw err;
        })
    }
    static async getAllRoutines(controller){
        return await Api.get(`${RoutinesApi.url}`,false,controller).catch(err => {
            throw err;
        })
    }
    static async updateRoutine(updatedRoutine,id,controller){
        return await Api.put(`${RoutinesApi.url}/`+id,true,updatedRoutine,controller)
    }
}
class Routine{
    constructor(name,detail,isPublic,category,difficulty) {
        this.name=name;
        this.detail=detail;
        this.isPublic=isPublic;
        this.category={id:category};
        this.difficulty=difficulty;
    }
}