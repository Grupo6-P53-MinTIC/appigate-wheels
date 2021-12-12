const reservationResolver = {
    Query: {
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
        }
    }
}
module.exports = reservationResolver;