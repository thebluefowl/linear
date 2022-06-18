import { gql, GraphQLClient } from "graphql-request"

interface Cycle {
    number :number
}

interface Team {
    id :string
    name :string
    activeCycle :Cycle
}

export const getTeam = async (client :GraphQLClient) :Promise<Team|null>  => {
    let t :Team
    const query = gql`
    query ($id: String!){
        team(id:$id) {
          id
          name
        }
      }`
      const variables = {
        id: "d9429632-b9d3-4518-8069-c498c2c223e9"
    }
      const data = await client.request(query, variables)
    
    console.log(data)
    return null
}