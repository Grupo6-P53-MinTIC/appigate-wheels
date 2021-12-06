const travelResolver = require('./travel_resolver');
const authResolver = require('./authResolver')

const lodash = require('lodash')

const resolvers = lodash.merge(authResolver,travelResolver)


module.exports = resolvers
