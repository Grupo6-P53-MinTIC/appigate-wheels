const userResolver = {
    // para gets
    Query: {                                        //userIdToken -> (retorno de authentications.js)
        userDetailById: async (_, {userId}, {dataSources}) => {
                return await dataSources.authAPI.getUser(userId); 
        },
        AllUserDetail: async (_, __, {dataSources}) => {
                return await dataSources.authAPI.getAllUsers();
        },

        AllDriversDetail: async (_, __,{dataSources}) => {
            return await dataSources.authAPI.getAllDrivers();
        },
        carByDriverId: async (_, {idDriver}, {dataSources}) => {
            return await dataSources.authAPI.getCarByDriverID(idDriver);
        },
        AllCarsDetail: async (_, __, {dataSources}) => {
            return await dataSources.authAPI.getAllCars();
        },
    },

    //para post-delete-update
    Mutation: {
        signUpUser:async (_,{userInput},{dataSources})=>{
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                email: userInput.email,
                name:userInput.name,
                lastName: userInput.lastName,
                birthDate: userInput.birthDate,
                gender: userInput.gender,
                documentNumber: userInput.documentNumber,
                phoneNumber: userInput.phoneNumber,
                typeAccount: userInput.typeAccount,
                car: userInput.car
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: async (_,{credentials},{dataSources})=>{
            return await dataSources.authAPI.authRequest(credentials);
 
        },
        refreshToken: (_, {refresh}, { dataSources }) => dataSources.authAPI.refreshToken(refresh),

        getUserByToken: async (_, {token}, { dataSources }) => {
            return await dataSources.authAPI.getUserByToken(token);
        },
        
    }
};

module.exports = userResolver;