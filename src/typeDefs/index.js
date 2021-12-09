const authTypesDefs = require('./authTypeDefs');
const cityTypeDefs = require('./cityTypeDefs');
const travelTypeDefs = require ('./travelTypeDefs');
const reservationTypeDefs = require ('./reservationTypeDefs');

const schemaArrays = [authTypesDefs, cityTypeDefs, travelTypeDefs, reservationTypeDefs];
module.exports     = schemaArrays

