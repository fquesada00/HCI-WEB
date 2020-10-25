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

    static async getCategoryByName(name,controller){
        let cats = await this.getCategories(controller).catch(err =>{
            throw err;
        });
        cats = cats.results
        let i;
        for (i = 0;i <cats.length;i++){
            if(cats[i].name.normalize() === name.normalize())
                return cats[i].id
        }
    }
}

class Category{
    constructor(name,detail) {
        this.name=name;
        this.detail=detail
    }
}

