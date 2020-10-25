import {UserApi} from "./user";
import {Cycle, CyclesApi} from "./cycles";
import {ExercisesApi} from "./exercises";
import {RoutinesApi, Routine} from "./routines";
import {CategoriesApi, Category} from "./Categories";

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
        let groups = CyclesApi.getRoutineCycles(id, controller).catch(err => {
            throw err
        }).results
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
        let groups = CyclesApi.getRoutineCycles(id, controller).catch(err => {
            throw err
        }).results
        let groupID = groups.filter(g => g.name === group)
        return await ExercisesApi.getExercises(id, groupID, controller).catch(err => {
            throw err
        })
    }

    static async createExercise(exercise, group, controller) {
        let ret = await this.getMyExerciseAndGroup(group, controller).catch(err => {
            throw err
        })
        let id = ret.myExercisesID
        let groupID = ret.groupID
        return ExercisesApi.createExercise(id, groupID, exercise, controller)

    }

    static async createRoutine(routine, cycles, exercises, controller) {
        let catID = await CategoriesApi.getCategoryByName(routine.category)
        routine.category = {id: catID}
        let routineID = await RoutinesApi.createRoutine(routine).catch(err => {
            throw err
        });
        routineID = routineID.id
        console.log("id de rutinas " + routineID)
        let i, j;
        let cycleId;
        console.log(cycles);
        console.log(cycles.length)
        for (i = 0; i < cycles.length; i++) {
            console.log('entre en for')
            cycleId = CyclesApi.createCycle(routineID, cycles[i], controller).catch(err => {
                throw err
            });
            if (exercises.length > 0)
                for (j = 0; j < exercises[i].length; j++) {
                    await ExercisesApi.addExerciseToCyle(routineID, cycleId, exercises[i][j], controller).catch(err => {
                        console.log('error for andiado')
                        throw err
                    });
                }
        }


    }

    static async initUser(controller) {
        let val = await UserApi.getCurrentUserRoutines(controller).catch(() => {
            val = null
        })
        if (val != null && val.totalCount === 0) {
            await CategoriesApi.getCategories(controller).catch(() => {
            }).then(async (cat) => {
                if (cat != null && cat.totalCount === 0) {
                    await CategoriesApi.putCategory(new Category('Larga', 'Rutinas de duracion larga'), controller)
                    await CategoriesApi.putCategory(new Category('Media', 'Rutinas de duracion media'), controller)
                    await CategoriesApi.putCategory(new Category('Corta', 'Rutinas de duracion corta'), controller)
                }
                this.error = ''
                await Store.initExercisesList(controller).catch(() => {
                    this.error = 'No se pudo inicializar mis ejercicios'
                })
            });

        }
    }


    static async  initExercisesList(controller) {
        let num = 1
        let cycles = [new Cycle('Brazos', 'Ejercicios de Brazos', 'exercise', num++, 1),
            new Cycle('Piernas', 'Ejercicios de Piernas', 'exercise', num++, 1),
            new Cycle('Pecho', 'Ejercicios de Pecho', 'exercise', num++, 1),
            new Cycle('Abdominales', 'Ejercicios de Abdominales', 'exercise', num++, 1)]
        let myExercises = new Routine('Mis Ejercicios', 'Ejercicios creados por mi', false, "Corta", 'intermediate')

        return await this.createRoutine(myExercises, cycles, [], controller)

    }


    static async deleteRoutine(routineID, controller) {
        let cycles = await CyclesApi.getRoutineCycles(routineID, controller).catch(err => {
            throw err
        })
        cycles = cycles.results
        let exercises = []
        let aux;
        let i, j;
        for (i = 0; i < cycles.length; i++) {
            aux = await ExercisesApi.getExercises(routineID, cycles[i].id).catch(err => {
                throw err
            })
            exercises[i] = aux.results;
            for (j = 0; j < exercises[i].length; j++) {
                await ExercisesApi.deleteExercise(routineID, cycles[i].id, exercises[i][j].id, controller)
            }
            await CyclesApi.deleteCycle(routineID, cycles[i].id, controller)
        }
        await RoutinesApi.deleteRoutine(routineID, controller)
    }

    static async deleteExercise(exerciseID, group, controller) {
        let ret = await this.getMyExerciseAndGroup(group, controller).catch(err => {
            throw err
        })
        let myExercisesID = ret.myExercisesID
        let groupID = ret.groupID
        return ExercisesApi.deleteExercise(myExercisesID, groupID, exerciseID, controller)
            .catch(err => {
                throw err
            })
    }

    // static async editRoutine(routine, cycles, exercises, controller) {
    //
    // }

    static async editExercise(exercise, group, controller) {
        let ret = await this.getMyExerciseAndGroup(group, controller).catch(err => {
            throw err
        })
        let groupID = ret.groupID

        await this.deleteExercise(exercise, groupID, controller).catch(err => {
            throw err
        })

        return await this.createExercise(exercise, group, controller).catch(err => {
            throw err
        })


    }

    static async getMyExerciseAndGroup(group, controller) {
        let myExercises = await UserApi.getCurrentUserRoutines(controller).catch(err => {
            throw err
        })
        let myExercisesID = myExercises.results[0].id;
        let groups = await CyclesApi.getRoutineCycles(myExercisesID, controller).catch(err => {
            throw err
        })
        groups = groups.results
        let groupID;
        let i;
        for (i = 0; i < groups.length; i++)
            if (groups[i].name.normalize() === group.normalize())
                groupID = groups[i].id

        return {groupID: groupID, myExercisesID: myExercisesID}
    }

}