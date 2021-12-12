const reservationResolver = {
    Query: {
        getAllReservations: async (_, __, { dataSources }) => {
            return dataSources.reservationAPI.getAllReservations();
        },
        getReservationById: async (_, { id }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationById(id);
        },
        getReservationByIdPassenger: async (_, { idPassenger }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationByIdPassenger(idPassenger);
        },
        getReservationByIdDriver: async (_, { idDriver }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationByIdDriver(idDriver);
        },
        getReservationByIdTravel: async (_, { idTravel }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationByIdTravel(idTravel);
        },
    },
    Mutation: {
        addReservation: async (_, { reservation }, { dataSources }) => {
            return dataSources.reservationAPI.postReservation(reservation)
        },
        deleteReservation: async (_, { idReservation }, { dataSources }) => {
            return dataSources.reservationAPI.deleteReservation(idReservation)
        }
    }
}
module.exports = reservationResolver;