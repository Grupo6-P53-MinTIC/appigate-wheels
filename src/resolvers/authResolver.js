const userResolver = {
    // para gets
    Query: {                                        //userIdToken -> (retorno de authentications.js)
        userDetailById: async (_, {userId}, {dataSources, userIdToken}) => {
            if(userId == userIdToken){
                return await dataSources.authAPI.getUser(userId); 
            }
            else
                return null;
        },
        AllUserDetailById: async (_, {}, {dataSources, userIdToken}) => {
                return await dataSources.authAPI.getAllUsers();
        }
    },
    //para post-delete-update
    Mutation: {
        signUpUser:async (_,{userInput},{dataSources})=>{
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                email   : userInput.email,
                typeAccount: userInput.typeAccount
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: async (_,{credentials},{dataSources})=>{
            return await dataSources.authAPI.authRequest(credentials);
 
        },
        refreshToken:(_,{token},{dataSources})=> dataSources.authAPI.refreshToken(token)
    }
};

module.exports = userResolver;