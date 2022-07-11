const { books } = require('../data')

exports.resolvers = {
    Query: {
        users: () => books,
    },
}
