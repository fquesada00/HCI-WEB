import {Api} from "./api";
import {UserApi} from "./user";
import {Store} from "./store";

export {RoutinesApi, Routine}

class RoutinesApi {
    static get url() {
        return `${Api.baseUrl}/routines`;
    }


    static async createRoutine(routine, controller) {
        return await Api.post(`${RoutinesApi.url}`, true, routine, controller).catch(err => {
            throw err;
        })
    }

    static async getAllRoutines(controller) {
        return await Api.get(`${RoutinesApi.url}`, true, controller).catch(err => {
            throw err;
        })
    }

    static async getAllRoutinesBy(rutina, controller) {
        switch (rutina) {
            case 'favoritos':
                return await Api.get(`${Api.baseUrl}/user/current/routines/favourites`, true, controller).catch(err => {
                    throw err;
                })
            case 'misRutinas':
                return await UserApi.getCurrentUserFavourites()
            case 'misEjercicios':
                return await Store.getMyExercisesAll(controller);
            case 'explorar':
                return await Api.get(`${RoutinesApi.url}`, true, controller).catch(err => {
                    throw err;
                })
        }
    }

    static async updateRoutine(updatedRoutine, id, controller) {
        return await Api.put(`${RoutinesApi.url}/` + id, true, updatedRoutine, controller)
    }

    static async deleteRoutine(routineID, controller) {
        return await Api.delete(`${RoutinesApi.url}/${routineID}`, true, controller)
            .catch(err => {
                throw err
            })
    }
}

class Routine {
    constructor(name, detail, isPublic, category, difficulty) {
        this.name = name;
        this.detail = detail;
        this.isPublic = isPublic;
        this.category = category;
        this.difficulty = difficulty;
    }
}