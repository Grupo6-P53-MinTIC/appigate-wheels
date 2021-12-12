const travelResolver = {
    Query: {
        getTravels: async (_, __, { dataSources }) => {
            return dataSources.travelAPI.getTravels();
        },
        getTravelById: async (_, {id}, { dataSources }) => {
            return dataSources.travelAPI.getTravelById(id);
        },
        getTravelByToPlace: async (_, { toPlace}, { dataSources }) => {
            return dataSources.travelAPI.getTravelByToPlace(toPlace)
        },
        getTravelByPassThrough: async (_, { passThrough}, { dataSources }) => {
            return dataSources.travelAPI.getTravelByPassThrough(passThrough)
        },
        getTravelByFromPlace: async (_, { fromPlace}, { dataSources }) => {
            return dataSources.travelAPI.getTravelByFromPlace(fromPlace)
        },
        getTravelByDriver: async (_, { idDriver}, { dataSources }) => {
            return dataSources.travelAPI.getTravelByDriver(idDriver)
        }
    },
    Mutation: {
        addTravel: async (_, { travel }, { dataSources }) => {
            return dataSources.travelAPI.postTravel(travel)
        },
        updateTravel: async (_, { travel }, { dataSources }) => {
            return dataSources.travelAPI.updateTravel(travel)
        },
        deleteTravel: async (_, { idTravel }, { dataSources }) => {
            return dataSources.travelAPI.deleteTravel(idTravel)
        }
    }
}
module.exports = travelResolver;