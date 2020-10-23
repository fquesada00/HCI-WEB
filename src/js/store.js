import {UserApi} from "./user";

export {Store}
class Store {
    static async getMyRoutines() {
        return await UserApi.getCurrentUserRoutines().catch((err) => {
            throw err
        });
    }

    static async getFavs(){
        return await UserApi.getCurrentUserFavourites().catch((err) =>{
            throw err
        });
    }
}