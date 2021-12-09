const { gql } = require('apollo-server');

const travelTypeDefs = gql`
    type Travel{
        idTravel        :String!
        idDriver        :String!
        nameDriver      :String!
        fromPlace       :String!
        toPlace         :String!
        passThrough     :String!
        published       :String!
        dateTravel      :String!
        seats           :String!
        price           :String!
    }
    input TravelInput{
        idTravel        :String!
        idDriver        :String!
        nameDriver      :String!
        fromPlace       :String!
        toPlace         :String!
        passThrough     :String!
        published       :String!
        dateTravel      :String!
        seats           :String!
        price           :String!
    }
    extend type Query{
        getTravelById(id:String!):Travel!
        getTravelByToPlace(toPlace:String!):[Travel!]
        getTravelByPassThrough(passThrough:String!):[Travel!]
        getTravelByFromPlace(fromPlace:String!):[Travel!]
        getTravelByDriver(idDriver:String!):[Travel!]
        getTravels:[Travel!]
    }
    extend type Mutation{
        addTravel(travel: TravelInput!): Travel!
    }
`;
module.exports = travelTypeDefs;




