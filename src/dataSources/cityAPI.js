const { RESTDataSource } = require('apollo-datasource-rest'); //leer fuentes de datos de rest
const serverConfig = require('../server'); //despliegues

class CityAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.travels_api_url;
    }
    async createCity(city){
        return await this.post('/city/', city);
    }
    async cityByCode(code){
        return await this.get(`/city/${code}`);
    }
    async cityByName(name){
        return await this.get(`/city-by-name/${name}`);
    }
    async cities(){
        return await this.get(`/cities`);
    }
}
module.exports = CityAPI;