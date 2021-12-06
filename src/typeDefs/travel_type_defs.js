const { gql } = require('apollo-server');

const travelTypeDefs =  gql `
    type Travel{
        idTravel    :String!
        idDriver    :String!
        nameDriver  :String!
        fromPlace   :String!
        toPlace     :String!
        passThrough :String!
        published   :String!
        dateTravel  :String!
        seats       :Integer!
        price       :Double!
    }

    input TravelInput{
        fromPlace   :String!
        toPlace     :String!
        dateTravel  :String!
        seats       :Integer!
    }

    input TravelToPlace{
        fromPlace   :String!
        toPlace     :String!
        passThrough :String!
        published   :String!
    }

    extends type Query{
        travelByIdtravel(idTravel:String!):[Travel]
    }

    extends type Mutation{
        readTravel(travelget:Travel!):getTravel
        readTravelToPlace(TravelPlace:TravelToPlace!):travelTo_place
        readTravelManager(TravelManager:TravelInput!):travelManager_name
        createTravel(TravelCreate:Travel!):newTravel       
    }
`;
module.exports = travelTypeDefs;