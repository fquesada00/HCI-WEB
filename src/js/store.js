import {UserApi} from "./user";
import {CyclesApi} from "./cycles";
import {ExercisesApi} from "./exercises";
import {RoutinesApi} from "./routines";

export {Store}

class Store {
    static async getMyRoutines(controller) {
        return await UserApi.getCurrentUserRoutines(controller).catch((err) => {
            throw err
        });
    }

    static async getFavs(controller) {
        return await UserApi.getCurrentUserFavourites(controller).catch((err) => {
            throw err
        });
    }

    static async getCompleted() {
        //TODO
    }


    static async getMyExercisesAll(controller) {
        let ret = []
        let myRoutines = this.getMyRoutines(controller).catch(err => {
            throw err
        })
        let id = myRoutines.results[0].id
        let groups = CyclesApi.getRoutineCycles(id, controller).catch(err=>{throw err}).results
        let i, e;
        for (i = 0; i < groups.length; i++) {
            e = await ExercisesApi.getExercises(id, groups[i], controller).catch(err => {
                throw err
            })
            ret.push(e.results)
        }
        return ret

    }

    static async getMyExercisesByGroup(group, controller) {
        let myRoutines = this.getMyRoutines(controller).catch(err => {
            throw err
        })
        let id = myRoutines.results[0].id
        let groups = CyclesApi.getRoutineCycles(id, controller).catch(err=>{throw err}).results
        let groupID = groups.filter(g => g.name === group)
        return await ExercisesApi.getExercises(id, groupID, controller).catch(err => {
            throw err
        })
    }

    static async createExercise(exercise, group, controller) {
        let myRoutines = this.getMyRoutines(controller).catch(err => {
            throw  err
        })
        let id = myRoutines.results[0].id
        let groups = CyclesApi.getRoutineCycles(id, controller).catch(err=>{throw err}).results
        let groupID = groups.filter(g => g.name === group).id
        return ExercisesApi.createExercise(id, groupID, exercise, controller)

    }

    static async createRoutine(routine, cycles, exercises, controller) {
        let routineID = await RoutinesApi.createRoutine(routine).id.catch(err => {
            throw err
        });
        let i, j;
        let cycleId;
        for (i = 0; i < cycles.length; i++) {
            cycleId = await CyclesApi.createCycle(routineID, cycles[i], controller).catch(err => {
                throw err
            });
            for (j = 0; j < exercises[i].length; j++) {
                await ExercisesApi.addExerciseToCyle(routineID, cycleId, exercises[i][j], controller).catch(err => {
                    throw err
                });
            }
        }


    }


}