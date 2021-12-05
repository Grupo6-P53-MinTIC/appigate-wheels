const travelResolver = {
    Query:{
        travelByIdtravel: async(_,{idTravel}, { dataSource, userIdToken }) => {
            if(idTravel == userIdToken)
                return await dataSource.TravelAPI.getTravel(idTravel)
            else 
                return null
            
        }
    },

    Mutation: {
        readTravel:async (_,{travelget},{dataSources})=>{
            const travelInput = {
                idTravel   : travelget.idTravel,
                idDriver   : travelget.idDriver,
                nameDriver : travelget.nameDriver,
                fromPlace  : travelget.fromPlace,
                toPlace    : travelget.toPlace,
                passThrough: travelget.passThrough,
                published  : travelget.published,
                dateTravel : (new Date().toISOString),
                seats      : travelget.seats,
                price      : travelget.price
            }
            return await dataSources.TravelAPI.getTravel(travelInput);
        },
        
        readTravelToPlace: async (_,{TravelPlace},{dataSources})=>{
            const placeInput = {
                fromPlace   : TravelPlace.fromPlace,
                toPlace     : TravelPlace.toPlace,
                passThrough : TravelPlace.passThrough,
                published   : TravelPlace.published
            }
            return await dataSources.TravelAPI.travelTo_place(placeInput);
    
        },

        readTravelToPlace: async (_,{TravelManager},{dataSources})=>{
            const managerInput = {
                fromPlace   : TravelManager.fromPlace,
                toPlace     : TravelManager.toPlace,
                passThrough : TravelManager.passThrough,
                published   : TravelManager.published
            }
            return await dataSources.TravelAPI.travelManager_name(managerInput);
    
        },

        createTravel: async (_,{TravelCreate},{dataSources})=>{
            const travelCreate = {
                idTravel   : TravelCreate.idTravel,
                idDriver   : TravelCreate.idDriver,
                nameDriver : TravelCreate.nameDriver,
                fromPlace  : TravelCreate.fromPlace,
                toPlace    : TravelCreate.toPlace,
                passThrough: TravelCreate.passThrough,
                published  : TravelCreate.published,
                dateTravel : (new Date().toISOString),
                seats      : TravelCreate.seats,
                price      : TravelCreate.price
            }
            return await dataSources.TravelAPI.newTravel(travelCreate);
    
        }
        
    }
};
module.exports = travelResolver;