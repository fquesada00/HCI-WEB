import { Api } from './api.js';

export { UserApi, Credentials, User };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
    }

    static async register(userData, controller) {
        const result = await Api.post(` ${UserApi.url} `, false, userData, controller)
        return result;
    }
    //FOR TESTING ONLY
    static async verifyEmail(credentials,code,controller){
        let verification  = {email:credentials.email,code:code};
        console.log(verification);
        await Api.post(` ${UserApi.url}/verify_email `,false,verification,controller )
    }
}

class Credentials {
    constructor(username, password,email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
//PENSAR
class User {    
    constructor(username, password, email,fullName, birthdate, gender) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.birthdate = birthdate;
        this.gender = gender;
    }
}