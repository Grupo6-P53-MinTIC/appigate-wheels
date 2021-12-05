const {RESTDataSource} = require('apollo-datasource-rest');
const serveConfig = require('../server');

class TravelAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.travel_api_url;
    }

    async getTravel(getTravel){
        travel = new Object(JSON.parse(JSON.stringify(getTravel)));
        return await this.get('/travel/{manager_name}',travel);
    }

    async getTravelPlace(travelTo_place){
        travel = new Object(JSON.parse(JSON.stringify(travelTo_place)));
        return await this.get('/travel/{manager_name}',travel);
    }

    async getTravelManager(travelManager_name){
        travel = new Object(JSON.parse(JSON.stringify(travelManager_name)));
        return await this.get('/travels/{manager_name}}',travel);

    }

    async createTravel(newTravel){
        travel = new Object(JSON.parse(JSON.stringify(newTravel)));
        return await this.post('/TRAVELS',travel);

    }
}