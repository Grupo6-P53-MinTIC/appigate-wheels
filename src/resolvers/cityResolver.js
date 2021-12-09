const cityResolver = {
    Query:{
        getCityByCode: async (_, {code}, {dataSources})=>{
            return dataSources.cityApi.cityByCode(code);
        },
        getCityByName: async (_, { nameCity}, {dataSources})=>{
            return dataSources.cityApi.cityByName(nameCity);
        },
        getAllCities: async (_, __, {dataSources})=>{
            return dataSources.cityApi.cities();
        },
    },
    Mutation:{
        addCity: async (_, {city}, {dataSources})=>{
            return dataSources.cityApi.createCity(city)
        }
    }
}
module.exports = cityResolver;