const travelResolver = require('./travel_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(travelResolver);

module.exports = resolvers;