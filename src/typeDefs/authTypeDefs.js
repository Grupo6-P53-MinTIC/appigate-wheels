const {gql} = require('apollo-server');


const authTypes = gql`
    type Tokens {
        refresh : String!
        access  : String!
    }

    type Access{
        acceess: String!
    }

    type CredentialsInput{
        username    : String! 
        password    : String!
    }

    type SignUpInput{
        username    : String!
        passwoed    : String!
        name        : String!
        email       : String!
    }

    type UserDetail{
        id          : Int!
        username    : String!
        password    : String!
        email       : String!
    }

    type Query {
        userDetailById(userId: Int!):UserDetail!
    }
    
    type Mutation{
        signUpUser(userInput: $SignUpInput): Token!
        logIn(credentials: $CredentialsInput): Token!
        refreshToken(token: String!): Access!
    }
`;
module.exports = authTypes;