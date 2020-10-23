import {Api} from './api.js';

export {UserApi, Credentials, User};

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {

        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        sessionStorage.setItem('token', result.token);
        Api.token = result.token;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        sessionStorage.removeItem('token');
        Api.token = undefined;
    }

    static async register(userData, controller) {
        return await Api.post(` ${UserApi.url} `, false, userData, controller)
    }

    static async getUser(id, controller) {
        let url = `${UserApi.url}` + id.toString()
        return await Api.get(url, true, controller)
    }

    static async updateCurrentUser(userData,controller){
        return await Api.put(`${UserApi.url}/current`,true,userData,controller);
    }

    static async getCurrentUser(controller) {
        return await Api.get(`${UserApi.url}/current`, true, controller).catch((err) => {
            throw err
        })
    }

    static async getCurrentUserRoutines(controller) {
        return await Api.get(`${UserApi.url}/current/routines/`, true, controller).catch((err) => {
            throw err;
        });
    }

    static async getCurrentUserFavourites(controller) {
        return await Api.get(`${UserApi.url}/current/routines/favourites`, true, controller).catch(err => {
            throw err;
        })
    }

    //FOR TESTING ONLY
    //TODO
    static async verifyEmail(email, code, controller) {
        let verification = {email: email, code: code};
        console.log(verification);
        await Api.post(` ${UserApi.url}/verify_email `, false, verification, controller)
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

//PENSAR
class User {
    constructor(username, password, email, fullName, birthdate, gender, phoneNum,avatarUrl) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.birthdate = birthdate;
        this.gender = gender;
        this.phoneNum = phoneNum;
        this.avatarUrl=avatarUrl
    }
}