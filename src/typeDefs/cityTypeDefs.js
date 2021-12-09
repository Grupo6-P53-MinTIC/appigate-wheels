const { gql } = require('apollo-server');

const cityTypeDefs = gql`
    type City{
        codeCity    :String!
        nameCity    :String!
    }
    input CodeCity{
        codeCity: String!
    }
    input CityInput{
        nameCity    :String!
        codeCity    :String!
    }
    extend type Query{
        getCityByCode(code:Int!):City!
        getCityByName(nameCity:String!):City!
        getAllCities:[City]
    }
    extend type Mutation{
        addCity(city: CityInput!): City
    }
`;
module.exports = cityTypeDefs;




