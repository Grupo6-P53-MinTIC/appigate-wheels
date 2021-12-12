const { RESTDataSource } = require('apollo-datasource-rest'); //leer fuentes de datos de rest
const serverConfig = require('../server'); //despliegues

class TravelAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.travels_api_url;
    }
    
    async getTravels() {
        return await this.get('/travels');
    }
    async getTravelById(id) {
        return await this.get(`/travel/${id}`);
    }
    async getTravelByToPlace(toPlace) {
        return await this.get(`/travels-to-place/${toPlace}`);
    }
    async getTravelByPassThrough(passThrough) {
        return await this.get(`/travels-pass-through/${passThrough}`);
    }
    async getTravelByFromPlace(fromPlace) {
        return await this.get(`/travels-from-place/${fromPlace}`);
    }
    async getTravelByDriver(idDriver) {
        return await this.get(`/travels-by-driver/${idDriver}`);
    }
    async postTravel(travel){
        return await this.post('/travel', travel);
    }
    async updateTravel(travel){
        let id = travel.idTravel;
        return await this.put(`/travel/${id}`, travel);
    }
}
module.exports = TravelAPI;