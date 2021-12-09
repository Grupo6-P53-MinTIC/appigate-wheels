const authResolver = require('./authResolver');
const cityResolver = require('./cityResolver');
const travelResolver = require('./travelResolver');
const reservationResolver = require('./reservationResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, cityResolver, travelResolver, reservationResolver);
module.exports = resolvers;
