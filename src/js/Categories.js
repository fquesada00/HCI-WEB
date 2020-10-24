import {Api} from "./api";

export {CategoriesApi,Category}

class CategoriesApi {
    static get url() {
        return `${Api.baseUrl}/categories`;
    }

    static async getCategories(controller){
        console.log("entre")
        return await Api.get(`${CategoriesApi.url}`,true,controller).catch((err)=>{
            console.log('err');
            throw err
        })
    }

    static async putCategory(category,controller){
        return Api.post(`${CategoriesApi.url}`,true,category,controller)
            .catch((err)=>{
                throw err
            })
    }
}

class Category{
    constructor(name,detail) {
        this.name=name;
        this.detail=detail
    }
}

