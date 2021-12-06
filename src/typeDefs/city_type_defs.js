const cityTypeDefs =  gql `
    type City{
        name_city    :String!
        code_city    :Int!
    }

    extends type Query{
        getCity(name_city:String!):City!
    }

`;
module.exports = cityTypeDefs;


