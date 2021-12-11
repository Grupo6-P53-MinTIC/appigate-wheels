const {gql} = require('apollo-server');

const authTypesDefs = gql `
    type Tokens {
        refresh: String!
        access : String!
    }
    type Access {
        access : String!
    }
    input CredentialsInput{
        username: String!
        password: String!
    }
    input Car{
        carRegistrationNumber: String!
        licenseNumber: String
        color: String
        brand: String
        model: String
        description: String
        equipament : String
    }
    input SignUpInput{
        username: String!
        password: String!
        email: String!
        name: String!
        lastName: String
        birthDate: String
        gender: String
        documentNumber: String
        phoneNumber: String
        typeAccount: String!
        car : Car
    }
    type UserDetail{
        id: Int
        username: String
        password: String
        email: String
        name: String
        lastName: String
        birthDate: String
        gender: String
        documentNumber: String
        phoneNumber: String
        typeAccount: String
    }
    type CarDetail{
        carRegistrationNumber: String!
        licenseNumber: String
        color: String
        brand: String
        model: String
        description: String
        equipament : String
    }

    type Query{
        userDetailById(userId: Int!):UserDetail
        carByDriverId(idDriver: Int!): [CarDetail]
        AllUserDetail:[UserDetail]
        AllDriversDetail:[UserDetail]
        AllCarsDetail:[CarDetail]
    }
    type Mutation{
        signUpUser(userInput : SignUpInput): Tokens!
        logIn(credentials    : CredentialsInput): Tokens!
        refreshToken(refresh : String!): Access
        getUserByToken(token : String!): [UserDetail]
    }
`
module.exports = authTypesDefs;