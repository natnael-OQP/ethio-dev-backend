import books from '../../data'

const resolver = {
    Query: {
        users: () => books,
    },
}

export default resolver
