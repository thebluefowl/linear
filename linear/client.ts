import { request, GraphQLClient } from 'graphql-request'


class Linear {
    private client :GraphQLClient

    constructor(token :string) {
        this.client = new GraphQLClient("https://google.com", {
            headers: {
                authorization: token
            }
        })
    }
}

export default Linear

