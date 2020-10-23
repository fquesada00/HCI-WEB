import {Api} from "./api";

export {ExercisesApi,Exercise,ExerciseImage,ExerciseVideo}

class ExercisesApi {
    static get url() {
        return `${Api.baseUrl}/routines`;
    }

    static async createExercise(routineID, cycleID, exercise, controller) {
        return await Api.post(`${ExercisesApi.url}/` + routineID + '/cycles/' + cycleID, true, exercise, controller)
            .catch(err => {
                throw err
            })
    }

    static async getExercises(routineID, cycleID, controller) {
        return await Api.get(`${ExercisesApi.url}/` + routineID + '/cycles/' + cycleID, true, controller).catch(err => {
            throw err
        })
    }

    static async addExerciseToCyle(routineID, cycleID, exercise, controller) {
        return await Api.put(`${ExercisesApi.url}/` + routineID + '/cycles/' + cycleID, true, exercise, controller)
            .catch(err => {
                throw err;
            })
    }
}

class Exercise{
    constructor(name,detail,type,duration,repetitions) {
        this.name=name;
        this.detail=detail;
        this.type = type;
        this.duration = duration;
        this.repetitions = repetitions
    }
}
class ExerciseImage{
    constructor(number,url) {
        this.number = number;
        this.url =url
    }
}
class ExerciseVideo{
    constructor(number,url) {
        this.number = number;
        this.url =url
    }
}