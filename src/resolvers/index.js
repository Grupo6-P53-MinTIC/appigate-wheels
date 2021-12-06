
const authResolver = require('./authResolver')

const lodash = require('lodash')

const resolvers = lodash.merge(authResolver)



const travelResolver = require('./travel_resolver');
const resolvers = lodash.merge(travelResolver);

module.exports = resolvers