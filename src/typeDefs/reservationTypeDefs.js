const { gql } = require('apollo-server');

const reservationTypeDefs = gql`
    type Reservation{
        id                  :String!
        idTravel            :String!
        idDriver            :String
        idPassenger         :String
        toPlace             :String
        fromPlace           :String
        price               :String
        seats               :Int!
        state               :String!
        dateTravel          :String!
        date                :String!
    }
    input ReservationInput{
        id                  :String
        idTravel            :String!
        idDriver            :String!
        idPassenger         :String!
        toPlace             :String!
        fromPlace           :String!
        price               :String!
        seats               :Int!
        state               :String
        dateTravel          :String
        date                :String
    }
    extend type Query{
        getReservationById(id:String!)                                  : Reservation!
        getAllReservations                                              :[Reservation]
        getReservationByIdPassenger(idPassenger:String!)                :[Reservation]
        getReservationByIdDriver(idDriver:String!)                      :[Reservation]
        getReservationByIdTravel(idTravel:String!)                      :[Reservation]
        
    }
    extend type Mutation{
        addReservation(reservation: ReservationInput!)                  : Reservation
        deleteReservation(idReservation: String!)                       : String
    }
`;
module.exports = reservationTypeDefs;




