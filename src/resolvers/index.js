const authResolver = require('./authResolver')
const cityResolver = require('./cityResolver')
const travelResolver = require('./travelResolver')

const lodash = require('lodash')

const resolvers = lodash.merge(authResolver, cityResolver, travelResolver)

module.exports = resolvers