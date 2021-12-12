const { gql } = require('apollo-server');

const reservationTypeDefs = gql`
    type Reservation{
        id                  :String!
        idTravel            :String!
        idDriver            :String!
        idPassenger         :String!
        toPlace             :String!
        fromPlace           :String!
        price               :String!
        seats               :Int!
        state               :String
        date                :String
    }
    input ReservationInput{
        id                  :String!
        idTravel            :String!
        idDriver            :String!
        idPassenger         :String!
        toPlace             :String!
        fromPlace           :String!
        price               :String!
        seats               :Int!
        state               :String
        date                :String
    }
    extend type Query{
        getReservationById(id:String!)                                  :Reservation!
        getReservationByUsernamePassenger(usernamePassenger:String!)    :[Reservation]
        getReservationByUsernameDriver(usernameDriver:String!)          :[Reservation]
        getReservationByIdTravel(idTravel:String!)                      :[Reservation]
        
    }
    extend type Mutation{
        addReservation(reservation: ReservationInput!)      :Reservation
    }
`;
module.exports = reservationTypeDefs;




