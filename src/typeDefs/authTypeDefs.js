const {gql} = require('apollo-server');

const authTypes = gql `
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
    input SignUpInput{
        username: String!
        password: String!
        email: String!
        typeAccount: String!
    }

    input UserDetailInput{
        id: Int!
        username: String!
        password: String!
        email: String!
        name: String!
        lastName: String!
        birthDate: String!
        gender: String!
        documentNumber: String!
        phoneNumber: String!
        typeAccount: String!
    }
    type UserDetail{
        id: Int!
        username: String!
        password: String!
        email: String!
        name: String!
        lastName: String!
        birthDate: String!
        gender: String!
        documentNumber: String!
        phoneNumber: String!
        typeAccount: String!
    }

    type BasicUserDetail{
        id: Int!
        username: String!
        typeAccount: String!
    }

    type Query{
        userDetailById(userId: Int!):UserDetail!
        AllUserDetailById:BasicUserDetail!
    }
    type Mutation{
        signUpUser(userInput : SignUpInput): Tokens!
        logIn(credentials: CredentialsInput): Tokens!
        refreshToken(token : String!): Access!
        updateUser(user: UserDetailInput! ): UserDetail!
        deleteUser(userId: String!): String
    }
`
module.exports = authTypes;