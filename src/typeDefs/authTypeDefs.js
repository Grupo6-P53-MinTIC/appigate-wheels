const {gql} = require('apollo-server');


const authTypes = gql`
    type Tokens {
        refresh : String!
        access  : String!
    }

    type Access{
        access: String!
    }

    input CredentialsInput{
        username    : String! 
        password    : String!
    }

    input SignUpInput{
        username    : String!
        password    : String!
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