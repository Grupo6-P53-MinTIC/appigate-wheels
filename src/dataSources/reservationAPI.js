const { RESTDataSource } = require('apollo-datasource-rest'); //leer fuentes de datos de rest
const serverConfig = require('../server'); //despliegues

class ReservationAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.travels_api_url;
    }
    async getReservationById(id) {
        return await this.get(`/reservation-byId/${id}`);
    }
    async getReservationByIdPassenger(idPassenger) {
        return await this.get(`/reservation-by-idPassenger/${idPassenger}`);
    }
    async getReservationByIdDriver(idDriver) {
        return await this.get(`/reservation-by-idDriver/${idDriver}`);
    }
    async getReservationByIdTravel(idTravel) {
        return await this.get(`/reservation-by-IdTravel/${idTravel}`);
    }
    async postReservation(reservation) {
        return await this.post('/reservation', reservation);
    }

}
module.exports = ReservationAPI;