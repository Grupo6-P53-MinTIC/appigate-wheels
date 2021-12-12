const {ApolloServer} = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const authentication = require("./utils/authentication" );
const AuthAPI = require("./dataSources/authAPI");
const CityAPI = require("./dataSources/cityAPI");
const TravelAPI = require("./dataSources/travelAPI");
const ReservationAPI = require("./dataSources/reservationAPI");

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        cityApi: new CityAPI(),
        travelAPI : new TravelAPI(),
        reservationAPI : new ReservationAPI(),
    }),
    introspection: true,
    playground: true
})

server.listen(process.env.PORT || 4040).then( 
    ({url})=>{
        console.log(`Server listening on port ${process.env.PORT}`);
        console.log(`Server ready at ${url}`);
    }
)