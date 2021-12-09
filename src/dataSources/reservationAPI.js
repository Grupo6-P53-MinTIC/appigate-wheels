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
    async getReservationByUsernamePassenger(usernamePassenger) {
        return await this.get(`/reservation-by-usernamePassenger/${usernamePassenger}`);
    }
    async getReservationByUsernameDriver(usernameDriver) {
        return await this.get(`/reservation-by-usernameDriver/${usernameDriver}`);
    }
    async getReservationByIdTravel(idTravel) {
        return await this.get(`/reservation-by-IdTravel/${idTravel}`);
    }
    async postReservation(reservation) {
        return await this.post('/reservation', reservation);
    }

}
module.exports = ReservationAPI;