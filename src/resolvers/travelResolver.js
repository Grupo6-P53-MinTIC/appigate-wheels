const travelResolver = {
    Query: {
        getTravels: async (_, __, { dataSources }) => {
            return dataSources.travelAPI.getTravels();
        },
        getTravelById: async (_, { id}, { dataSources }) => {
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
        // addCity: async (_, { city }, { dataSources }) => {
        //     return dataSources.cityApi.createCity(city)
        // }
    }
}
module.exports = travelResolver;