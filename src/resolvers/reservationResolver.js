const reservationResolver = {
    Query: {
        getReservationById: async (_, { id }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationById(id);
        },
        getReservationByUsernamePassenger: async (_, { usernamePassenger }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationByUsernamePassenger(usernamePassenger);
        },
        getReservationByUsernameDriver: async (_, { usernameDriver }, { dataSources }) => {
            return dataSources.reservationAPI.getReservationByUsernameDriver(usernameDriver);
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